AFRAME.registerComponent("info", {
    schema: {
      itemId: {default: "", type: "string"},
    },
    update: function() {
      this.createBanner();
    },
    createBanner: function() {
      postersInfo = {
        batman: {
          banner_url: "./assets/banners/batman.jpg",
          title: "Batman",
          released_year: "1939",
          description:
            "Batman is a superhero by night and billionaire Bruce Wayne by day who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger.",
        },
        supergirl: {
          banner_url: "./assets/banners/supergirl.jpg",
          title: "Supergirl",
          released_year: "1983",
          description:
            "Kara Zor-El, also known by her adoptive names of Linda Lee Danvers, Kara Kent, Linda Lang, and Kara Danvers, and the superhero name of Supergirl, is a superheroine appearing in American comic books published by DC Comics. She is the elder cousin of Superman and shares the same powers as him as she is also from Krypton. She was created by Otto Binder and designed by Al Plastino.",
        },
        superman: {
            banner_url: "./assets/banners/superman.jpg",
            title: "Superman",
            released_year: "1938",
            description:
              "Superman is a fictional character and a superhero with powers from the fictional planet Krypton who first appeared in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1.",
        },
        wonder_woman: {
          banner_url: "./assets/banners/wonder_woman.jpg",
          title: "Wonder Woman",
          released_year: "1941",
          description:
            "Wonder Woman is a superheroine appearing in American comic books published by DC Comics. The character is a founding member of the Justice League. Created by Charles Moulton and his wife Elizabeth Holloway.",
        },
      };
      const {itemId} = this.data; 
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.98,
        height: 1.3,
      });
      entityEl.setAttribute("material", {color: "black"});
      entityEl.setAttribute("position", {x: 0, y: 0.2, z: -1});
      const item = postersInfo[itemId];  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.86,
        height: 0.5,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "exo2bold",
        width: 1.3,
        height: 2.5,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "dejavu",
        width: 0.75,
        height: 0.99,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.45, y: -0.23, z: 0.05 });
      return entityEl;
    },
});