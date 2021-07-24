AFRAME.registerComponent("comics-posters", {
    init: function() {
      this.postersContainer = this.el;
      this.posters();
    },
  
    posters: function() {
      const postersRef = [
        {
          id: "batman",
          url: "./assets/thumbnails/batman.jpg"
        },
        {
          id: "supergirl",
          url: "./assets/thumbnails/supergirl.jpg"
        },
  
        {
          id: "superman",
          url: "./assets/thumbnails/superman.jpg"
        },
        {
          id: "wonder-woman",
          url: "./assets/thumbnails/wonder_woman.jpg"
        }
      ];
      let previousXPosition = -60;
  
      for (var item of postersRef) {
        const posX = previousXPosition + 25;
        const posY = 15;
        const posZ = -35;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
  
        const borderEl = this.createBorder(position, item.id);

        const poster = this.createPoster(item);
        borderEl.appendChild(poster);
  
        this.postersContainer.appendChild(borderEl);
      }
    },

    createBorder: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 25,
        height: 35
      });
  
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", { color: "blue" });
  
      return entityEl;
    },

    createPoster: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 30
      });
  
      entityEl.setAttribute("position", { x: 0, y: 4, z: 0.1 });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    }
  });