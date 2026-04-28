/**
 * Lite Agent - 前端脚本引擎
 * 可以在这里添加你的自定义逻辑
 */

class LiteAgent {
  constructor() {
    this.name = 'LiteAgent';
    this.version = '1.0.0';
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    
    console.log(`🚀 ${this.name} v${this.version} initialized`);
    
    // 监听语言切换
    this.setupLanguageDetection();
    
    // 添加性能监控
    this.monitorPerformance();
    
    // 添加动态功能
    this.addDynamicFeatures();
    
    this.initialized = true;
  }

  setupLanguageDetection() {
    const html = document.documentElement;
    this.currentLang = html.getAttribute('lang') || 'en';
    console.log(`🌍 Current language: ${this.currentLang}`);
    
    // 监听可能的语言变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'lang') {
          this.currentLang = html.getAttribute('lang');
          console.log(`🔄 Language changed to: ${this.currentLang}`);
        }
      });
    });
    
    observer.observe(html, { attributes: true });
  }

  monitorPerformance() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const timing = performance.getEntriesByType('navigation')[0];
          if (timing) {
            console.log('📊 Performance:', {
              dns: timing.domainLookupEnd - timing.domainLookupStart,
              tcp: timing.connectEnd - timing.connectStart,
              request: timing.responseStart - timing.requestStart,
              response: timing.responseEnd - timing.responseStart,
              domLoaded: timing.domContentLoadedEventEnd - timing.fetchStart,
              total: timing.loadEventEnd - timing.fetchStart
            });
          }
        }, 0);
      });
    }
  }

  addDynamicFeatures() {
    // 添加实时时钟
    this.addLiveClock();
    
    // 添加滚动特效
    this.addScrollEffects();
    
    // 添加交互反馈
    this.addInteractiveFeedback();
  }

  addLiveClock() {
    const clockContainer = document.createElement('div');
    clockContainer.className = 'lite-agent-clock';
    clockContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgba(0,0,0,0.7);
      color: white;
      padding: 8px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-family: monospace;
      z-index: 1000;
      backdrop-filter: blur(10px);
    `;
    
    const updateClock = () => {
      const now = new Date();
      clockContainer.textContent = now.toLocaleTimeString();
    };
    
    updateClock();
    setInterval(updateClock, 1000);
    document.body.appendChild(clockContainer);
  }

  addScrollEffects() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      const header = document.querySelector('header');
      
      if (header) {
        if (currentScroll > lastScroll && currentScroll > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      }
      
      lastScroll = currentScroll;
    });
  }

  addInteractiveFeedback() {
    document.addEventListener('click', (e) => {
      // 为按钮添加点击效果
      if (e.target.tagName === 'BUTTON' && !e.target.classList.contains('no-ripple')) {
        const btn = e.target;
        const rect = btn.getBoundingClientRect();
        
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.7);
          transform: scale(0);
          animation: ripple 0.6s linear;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          pointer-events: none;
        `;
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      }
    });
    
    // 添加动画
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // 工具方法
  log(message, data = null) {
    console.log(`[${this.name}] ${message}`, data || '');
  }

  alert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    const colors = {
      info: 'bg-blue-100 border-blue-500 text-blue-700',
      success: 'bg-green-100 border-green-500 text-green-700',
      warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
      error: 'bg-red-100 border-red-500 text-red-700'
    };
    
    alertDiv.className = `p-4 mb-4 border-l-4 ${colors[type]} rounded`;
    alertDiv.textContent = message;
    
    const container = document.querySelector('main') || document.body;
    if (container.firstChild) {
      container.insertBefore(alertDiv, container.firstChild);
    } else {
      container.appendChild(alertDiv);
    }
    
    setTimeout(() => alertDiv.remove(), 5000);
  }
}

// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
  window.liteAgent = new LiteAgent();
  window.liteAgent.init();
  
  // 添加演示内容
  const contentDiv = document.getElementById('dynamic-content');
  if (contentDiv) {
    const demoContent = document.createElement('div');
    demoContent.className = 'lite-agent-demo';
    demoContent.innerHTML = `
      <div style="
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        margin-top: 1.5rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      ">
        <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🚀 Lite Agent Active</div>
        <div style="font-size: 0.875rem; opacity: 0.9;">
          Powered by client-side JavaScript • No server required
        </div>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: center;">
          <button onclick="liteAgent.alert('Demo alert from Lite Agent!', 'info')" 
            style="padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); border-radius: 0.375rem; font-size: 0.875rem;">
            Show Alert
          </button>
          <button onclick="document.querySelector('.lite-agent-clock').style.display = document.querySelector('.lite-agent-clock').style.display === 'none' ? 'block' : 'none'" 
            style="padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); border-radius: 0.375rem; font-size: 0.875rem;">
            Toggle Clock
          </button>
        </div>
      </div>
    `;
    contentDiv.appendChild(demoContent);
  }
});

// 全局导出
if (typeof window !== 'undefined') {
  window.LiteAgent = LiteAgent;
}