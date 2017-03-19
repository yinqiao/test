define("@weex-component/upx/qua-mod/wxc-title", function(t, e, i) {
  i.exports = {
    data: function() {
      return {
        data: {},
        theme: {},
        defaultTheme: {
          marginTop: 8,
          color: "#333",
          mbColor: "transparent",
          paddingBottom: 0,
          mImgHeight: 50,
          mbImg: !1,
          lineColor: "#a1a1a1"
        },
        defaultConfig: {
          hideMod: !1
        },
        spm: "",
        schemaVersion: "",
        imgTitle: "",
        imgUrlM: "",
        mbHref: "",
        is_show: !0
      }
    },
    methods: {
      openUrl: function(t) {
        var e = t.target;
        if (!e) throw new Error("Cant find currentTarget");
        var i = e.attr.href,
          n = e.attr.spmc,
          r = e.attr.spmd;
        if (i && n && r) {
          var o = this._app.zebraUtils;
          o.url.openUrl(this, i, n, r)
        }
      },
      elevatorTitleAppear: function(t) {
        var e = (t.target, this._app.elevatorLastScrollTime);
        (!e || Date.now() - e > 1500) && this.$dispatch("elevatorTitleAppear", {
          moduleId: this.moduleId,
          direction: t.direction
        })
      }
    },
    created: function() {
      var t = this._app.zebraUtils,
        e = this.data;
      return e && e.item && e.item.imgTitle ? (this.imgTitle = e.item.imgTitle, this.imgUrlM = e.item.imgUrlM, this.mbHref = e.item.mbHref, this.theme = t.theme.checkTheme(this.defaultTheme, this.theme), this.config = t.theme.checkConfig(this.defaultConfig, this.config), this.theme.paddingBottom = t.theme.toPixel(this, this.theme.paddingBottom), void(this.theme.marginTop = t.theme.toPixel(this, this.theme.marginTop))) : void(this.is_show = !1)
    }
  }, i.exports.style = {
    "banner-img": {
      "flexDirection": "row",
      "width": 750
    },
    "banner-title": {
      "fontSize": 32,
      "paddingLeft": 20,
      "paddingRight": 20
    },
    "line": {
      "width": 50,
      "height": 2
    },
    "title": {
      "width": 750,
      "height": 80,
      "justifyContent": "center",
      "alignItems": "center",
      "flexDirection": "row"
    }
  }, i.exports.template = {
    "type": "div",
    "children": [{
      "type": "div",
      "shown": function() {
        return this.is_show
      },
      "attr": {
        "elevator": function() {
          return this.imgTitle
        },
        "elevatorid": function() {
          return this.moduleId
        }
      },
      "classList": ["wrapper"],
      "events": {
        "appear": "elevatorTitleAppear"
      },
      "style": {
        "paddingBottom": function() {
          return this.theme.paddingBottom
        },
        "backgroundColor": function() {
          return this.theme.mbColor
        },
        "marginTop": function() {
          return this.theme.marginTop
        }
      },
      "children": [{
        "type": "div",
        "shown": function() {
          return this.config.hideMod
        },
        "children": [{
          "type": "text",
          "attr": {
            "dataTitle": function() {
              return this.imgTitle
            }
          }
        }]
      }, {
        "type": "div",
        "shown": function() {
          return !this.config.hideMod
        },
        "children": [{
          "type": "div",
          "shown": function() {
            return this.imgUrlM
          },
          "events": {
            "click": "openUrl"
          },
          "attr": {
            "href": function() {
              return this.mbHref
            },
            "spmc": function() {
              return this.spm
            },
            "spmd": "dbanner1"
          },
          "children": [{
            "type": "image",
            "classList": ["banner-img"],
            "attr": {
              "src": function() {
                return this.imgUrlM
              },
              "alt": function() {
                return this.imgTitle
              }
            },
            "style": {
              "height": function() {
                return this.theme.mImgHeight
              }
            }
          }]
        }, {
          "type": "div",
          "shown": function() {
            return !this.imgUrlM
          },
          "children": [{
            "type": "div",
            "shown": function() {
              return this.theme.mbImg
            },
            "children": [{
              "type": "image",
              "attr": {
                "src": function() {
                  return this.theme.mbImg
                }
              },
              "style": {
                "zIndex": -1,
                "position": "absolute",
                "width": 750,
                "height": 80
              }
            }]
          }, {
            "type": "div",
            "classList": ["title"],
            "children": [{
              "type": "div",
              "classList": ["line"],
              "style": {
                "backgroundColor": function() {
                  return this.theme.lineColor
                }
              }
            }, {
              "type": "text",
              "classList": ["banner-title"],
              "style": {
                "color": function() {
                  return this.theme.color
                }
              },
              "attr": {
                "value": function() {
                  return this.imgTitle
                }
              }
            }, {
              "type": "div",
              "classList": ["line"],
              "style": {
                "backgroundColor": function() {
                  return this.theme.lineColor
                }
              }
            }]
          }]
        }]
      }]
    }]
  }
});;