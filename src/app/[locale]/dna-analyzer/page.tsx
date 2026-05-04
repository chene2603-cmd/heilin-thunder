'use client';
import { useState } from 'react';

class DNAAnalyzer {
  名称;
  版本;
  创建时间;
  递归深度;
  最大深度;
  分析历史;
  知识库;
  优化次数;
  模板;

  constructor(名称 = "DNA分析引擎") {
    this.名称 = 名称;
    this.版本 = "2.0";
    this.创建时间 = new Date();
    this.递归深度 = 0;
    this.最大深度 = 5;
    this.分析历史 = [];
    this.知识库 = {};
    this.优化次数 = 0;

    this.模板 = {
      "商业系统": ["产品","运营","技术","市场"],
      "技术产品": ["功能","体验","架构","生态"],
      "个人成长": ["输入","处理","输出","反馈"],
      "社会组织": ["结构","文化","流程","目标"]
    };
  }

  分析(目标, 类型 = "自动识别") {
    this.递归深度 += 1;
    if (类型 === "自动识别") 类型 = this._识别类型(目标);
    const 维度 = this._获取维度(类型);
    const 分析结果 = {
      目标: String(目标),
      类型: 类型,
      维度: 维度,
      递归深度: this.递归深度,
      时间戳: new Date().toISOString(),
      分析ID: this._md5(`${目标}${Date.now()}`).slice(0,8)
    };
    for (const 维度名 of 维度) 分析结果[维度名] = this._分析维度(目标, 维度名);
    分析结果["洞察"] = this._生成洞察(分析结果);
    分析结果["建议"] = this._生成建议(分析结果);
    this.分析历史.push(分析结果);
    this.知识库[分析结果["分析ID"]] = 分析结果;
    return 分析结果;
  }

  _识别类型(目标) {
    const s = String(目标).toLowerCase();
    if (["公司","企业","商业","盈利"].some(w=>s.includes(w))) return "商业系统";
    if (["app","软件","产品","系统"].some(w=>s.includes(w))) return "技术产品";
    if (["学习","成长","技能","进步"].some(w=>s.includes(w))) return "个人成长";
    if (["团队","组织","社群","社区"].some(w=>s.includes(w))) return "社会组织";
    return "通用系统";
  }

  _获取维度(类型) {
    return this.模板[类型] || ["维度A","维度B","维度C","维度D"];
  }

  _分析维度(目标, 维度) {
    return {
      状态: "已分析",
      强度: Math.abs(this._hash(String(目标)+维度))%100,
      特征: [`${维度}特征1`,`${维度}特征2`],
      问题: `潜在的${维度}问题`,
      机会: `${维度}优化机会`
    };
  }

  _生成洞察(分析结果) {
    const 维度强度 = 分析结果.维度.map(d=>[d,分析结果[d].强度]);
    const 最强维度 = 维度强度.reduce((a,b)=>a[1]>b[1]?a:b)[0];
    const 最弱维度 = 维度强度.reduce((a,b)=>a[1]<b[1]?a:b)[0];
    const 平均强度 = 维度强度.reduce((sum,x)=>sum+x[1],0)/维度强度.length;
    const 洞察 = [
      `系统优势在${最强维度}维度`,
      `系统短板在${最弱维度}维度，建议优先优化`
    ];
    if (Math.max(...维度强度.map(x=>x[1]))>平均强度*1.5) {
      洞察.push("系统发展不均衡，存在单点依赖风险");
    }
    return 洞察;
  }

  _生成建议(分析结果) {
    const 建议 = 分析结果.维度.map(d=>`在${d}维度：${分析结果[d].机会}`);
    建议.push("立即行动：选择1-2个高价值维度重点突破");
    建议.push("持续监控：建立四维健康度仪表盘");
    return 建议;
  }

  _hash(s) {let h=0;for(let i=0;i<s.length;i++)h=((h<<5)-h)+s.charCodeAt(i),h|=0;return h;}
  _md5(s) {return Array.from(s).reduce((a,b)=>((a<<5)-a+b.charCodeAt(0))|0,0).toString(16).padStart(8,"0");}
}

export default function DNAAnalyzerPage() {
  const [pwd, setPwd] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [target, setTarget] = useState("");
  const [type, setType] = useState("自动识别");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [err, setErr] = useState("");

  const check = () => {
    if (pwd === "198051") setAuthorized(true);
    else alert("密码错误");
  };

  if (!authorized) {
    return (
      <div style={{padding:40,textAlign:"center"}}>
        <h2>🔒 私有功能</h2>
        <input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)} style={{padding:10,width:240,marginTop:20}} />
        <br />
        <button onClick={check} style={{padding:10,width:240,marginTop:10,background:"#007bff",color:"white",border:0,cursor:"pointer"}}>验证进入</button>
      </div>
    );
  }

  const run = () => {
    if (!target.trim()) { setErr("请输入分析目标"); return; }
    setLoading(true);
    setErr("");
    try {
      const engine = new DNAAnalyzer();
      const res = engine.分析(target, type);
      setResult(res);
    } catch (e) {
      setErr("分析出错");
    }
    setLoading(false);
  };

  return (
    <div style={{padding:20,maxWidth:800,margin:"0 auto"}}>
      <h1 style={{textAlign:"center"}}>🧬 DNA四维分析引擎</h1>
      <input placeholder="输入分析目标" value={target} onChange={(e)=>setTarget(e.target.value)} style={{width:"100%",padding:12,margin:"10px 0",boxSizing:"border-box"}} />
      <select value={type} onChange={(e)=>setType(e.target.value)} style={{width:"100%",padding:12,margin:"10px 0",boxSizing:"border-box"}}>
        <option>自动识别</option>
        <option>商业系统</option>
        <option>技术产品</option>
        <option>个人成长</option>
        <option>社会组织</option>
      </select>
      <button onClick={run} disabled={loading} style={{width:"100%",padding:12,background:loading?"#6c757d":"#007bff",color:"white",border:0,cursor:"pointer"}}>
        {loading?"分析中...":"开始分析"}
      </button>
      {err&&<p style={{color:"red",textAlign:"center"}}>{err}</p>}
      {result&&<pre style={{marginTop:20,padding:20,background:"#f8f9fa",borderRadius:8,overflowX:"auto"}}>{JSON.stringify(result,null,2)}</pre>}
    </div>
  );
}
