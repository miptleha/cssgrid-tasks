class ViewportSimulator {
    constructor() {
        this.currentSize = 'desktop';
        this.init();
    }

    init() {
        this.createControls();
        this.updateIndicator();
        this.bindEvents();
    }

    createControls() {
        const controlsHtml = `
            <div class="controls">
                <div class="control-group">
                    <label for="viewMode">View Mode:</label>
                    <select id="viewMode">
                        <option value="auto">Auto (Resize Browser)</option>
                        <option value="mobile">Mobile (≤ 599px)</option>
                        <option value="tablet">Tablet (600px - 1023px)</option>
                        <option value="desktop" selected>Desktop (≥ 1024px)</option>
                    </select>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', controlsHtml);
    }

    bindEvents() {
        const viewMode = document.getElementById('viewMode');
        viewMode.addEventListener('change', (e) => this.handleViewModeChange(e));
        
        window.addEventListener('resize', () => this.handleResize());
    }

    handleViewModeChange(e) {
        const mode = e.target.value;
        this.applyViewMode(mode);
    }

    applyViewMode(mode) {
        const container = document.querySelector('.container');
        if (!container) return;

        switch(mode) {
            case 'mobile':
                container.style.width = '375px';
                container.style.maxWidth = '375px';
                this.currentSize = 'mobile';
                break;
            case 'tablet':
                container.style.width = '768px';
                container.style.maxWidth = '768px';
                this.currentSize = 'tablet';
                break;
            case 'desktop':
                container.style.width = '1200px';
                container.style.maxWidth = '1200px';
                this.currentSize = 'desktop';
                break;
            case 'auto':
                container.style.width = '';
                container.style.maxWidth = '';
                this.updateFromWindowSize();
                break;
        }
        
        this.updateIndicator();
    }

    updateFromWindowSize() {
        const width = window.innerWidth;
        if (width < 600) {
            this.currentSize = 'mobile';
        } else if (width < 1024) {
            this.currentSize = 'tablet';
        } else {
            this.currentSize = 'desktop';
        }
    }

    handleResize() {
        const viewMode = document.getElementById('viewMode');
        if (viewMode.value === 'auto') {
            this.updateFromWindowSize();
            this.updateIndicator();
        }
    }

    updateIndicator() {
        let indicator = document.querySelector('.size-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'size-indicator';
            document.body.appendChild(indicator);
        }
        
        let color;
        switch(this.currentSize) {
            case 'mobile': color = '#FF5252'; break;
            case 'tablet': color = '#FF9800'; break;
            case 'desktop': color = '#4CAF50'; break;
            default: color = '#4CAF50';
        }
        
        indicator.innerHTML = `
            Current: <span style="color: ${color}; font-weight: bold;">
                ${this.currentSize.charAt(0).toUpperCase() + this.currentSize.slice(1)}
            </span>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.viewportSimulator = new ViewportSimulator();
});