AFRAME.registerComponent("cursor-events", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function() {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    }, 
    update: function() {
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
      c = fadeBackgroundEl.children;
      if (c.length > 0) {
        var i;
        for (i = 0; i <= c.length; i++) {
          fadeBackgroundEl.removeChild(c[i]);
        }
      } else {
        this.handleMouseClickEvents();
      }
    }, 
    handleMouseEnterEvents: function() {
      this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const postersId = ["batman", "supergirl", "superman", "wonder-woman"];
        if (postersId.includes(id)) {
          const postersContainer = document.querySelector("#posters-container");
          postersContainer.setAttribute("cursor-events", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", { color: "pink" });
        }
      });
    },
    handleMouseLeaveEvents: function() {
       this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", { color: "blue" });
          }
        }
      });
    },
    handleMouseClickEvents: function () {
      this.el.addEventListener("click", () => {
        const {selectedItemId} = this.data;
        const fadeBackgroundEl = document.querySelector("#fadeBackground");
        const titleEl = document.querySelector("#app-title");
        const cursorEl = document.querySelector("#camera-cursor");
        if (selectedItemId) {
          fadeBackgroundEl.setAttribute("visible", true);
          fadeBackgroundEl.setAttribute("info-banner", {
            itemId: selectedItemId,
          });
          titleEl.setAttribute("visible", false);
          cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
          cursorEl.setAttribute("geometry", {
            radiusInner: 0.04,
            radiusOuter: 0.05,
          });
        } 
        else {
          fadeBackgroundEl.setAttribute("visible", false);
          titleEl.setAttribute("visible", true);
          cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
          cursorEl.setAttribute("geometry", {
            radiusInner: 0.07,
            radiusOuter: 0.13,
          });
        }
      });
    } 
  });