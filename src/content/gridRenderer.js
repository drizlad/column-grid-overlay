/**
 * GridRenderer - Manages the grid overlay DOM structure and rendering
 */
class GridRenderer {
  constructor(config) {
    this.config = config;
    this.container = null;
    this.isVisible = false;
  }

  /**
   * Calculate column width based on viewport and configuration
   * @returns {number} Column width in pixels
   */
  calculateColumnWidth() {
    const viewportWidth = window.innerWidth;
    const totalMargins = this.config.marginWidth * 2;
    const totalGutters = this.config.gutterWidth * (this.config.columnCount - 1);
    const availableWidth = viewportWidth - totalMargins - totalGutters;
    return availableWidth / this.config.columnCount;
  }

  /**
   * Create the grid overlay DOM structure
   * @returns {HTMLElement} Grid container element
   */
  createGrid() {
    const container = document.createElement('div');
    container.className = 'column-grid-overlay';
    container.id = 'column-grid-overlay';

    const inner = document.createElement('div');
    inner.className = 'column-grid-overlay__inner';
    
    if (this.config.centered) {
      inner.classList.add('column-grid-overlay__inner--centered');
    }

    // Apply margins
    inner.style.paddingLeft = `${this.config.marginWidth}px`;
    inner.style.paddingRight = `${this.config.marginWidth}px`;

    // Apply max-width if set
    if (this.config.maxWidth) {
      inner.style.maxWidth = `${this.config.maxWidth}px`;
    }

    const columnWidth = this.calculateColumnWidth();

    // Create columns and gutters
    for (let i = 0; i < this.config.columnCount; i++) {
      // Create column
      const column = document.createElement('div');
      column.className = 'column-grid-overlay__column';
      column.style.width = `${columnWidth}px`;
      column.style.backgroundColor = this.config.columnColor;
      inner.appendChild(column);

      // Create gutter (except after last column)
      if (i < this.config.columnCount - 1) {
        const gutter = document.createElement('div');
        gutter.className = 'column-grid-overlay__gutter';
        gutter.style.width = `${this.config.gutterWidth}px`;
        
        if (this.config.showGutters) {
          gutter.style.backgroundColor = this.config.gutterColor;
        }
        
        inner.appendChild(gutter);
      }
    }

    container.appendChild(inner);
    return container;
  }

  /**
   * Render or re-render the grid
   */
  render() {
    // Remove existing grid if present
    if (this.container && document.body.contains(this.container)) {
      this.container.remove();
    }

    // Create new grid
    this.container = this.createGrid();

    // Add to DOM if visible
    if (this.isVisible) {
      document.body.appendChild(this.container);
    }
  }

  /**
   * Show the grid overlay
   */
  show() {
    this.isVisible = true;
    if (this.container && !document.body.contains(this.container)) {
      document.body.appendChild(this.container);
    } else if (!this.container) {
      this.render();
    }
  }

  /**
   * Hide the grid overlay
   */
  hide() {
    this.isVisible = false;
    if (this.container && document.body.contains(this.container)) {
      this.container.remove();
    }
  }

  /**
   * Toggle grid visibility
   */
  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Update configuration and re-render
   * @param {Object} newConfig - Updated configuration
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.render();
  }

  /**
   * Clean up and remove grid from DOM
   */
  destroy() {
    if (this.container && document.body.contains(this.container)) {
      this.container.remove();
    }
    this.container = null;
  }
}

// Make available globally for content script
if (typeof window !== 'undefined') {
  window.GridRenderer = GridRenderer;
}
