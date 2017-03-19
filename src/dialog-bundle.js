! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("npm/@ali/wxc-dialog/demo/index", [], e) : "object" == typeof exports ? exports["npm/@ali/wxc-dialog/demo/index"] = e() : t["npm/@ali/wxc-dialog/demo/index"] = e()
}(this, function() {
	return function(t) {
		function e(i) {
			if (o[i]) return o[i].exports;
			var n = o[i] = {
				exports: {},
				id: i,
				loaded: !1
			};
			return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
		}
		var o = {};
		return e.m = t, e.c = o, e.p = "/", e(0)
	}([function(t, e, o) {
		var i = o(1),
			n = o(2),
			r = o(3);
		__weex_define__("@weex-component/c929e3559d7b23f12e95f97a094682d0", [], function(t, e, o) {
			r(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = i, o.exports.style = n
		}), __weex_bootstrap__("@weex-component/c929e3559d7b23f12e95f97a094682d0", void 0, void 0)
	}, function(t, e) {
		t.exports = {
			type: "div",
			classList: ["container"],
			children: [{
				type: "div",
				classList: ["demo"],
				children: [{
					type: "div",
					classList: ["btn"],
					events: {
						click: "openDialog"
					},
					children: [{
						type: "text",
						classList: ["btn-txt"],
						attr: {
							value: "对话消息Dialog"
						}
					}]
				}, {
					type: "div",
					classList: ["btn", "red"],
					events: {
						click: "openSubmitDialog"
					},
					children: [{
						type: "text",
						classList: ["btn-txt"],
						attr: {
							value: "确认消息Dialog"
						}
					}]
				}, {
					type: "div",
					classList: ["btn", "blue"],
					events: {
						click: "openNoPromptDialog"
					},
					children: [{
						type: "text",
						classList: ["btn-txt"],
						attr: {
							value: "不再提示Dialog"
						}
					}]
				}]
			}, {
				type: "wxc-dialog",
				id: "dialog-demo",
				attr: {
					title: "阿里旅行协议",
					content: "为保障消费者权益，阿里旅行·去啊服务保障全面升级，凡在阿里旅行·去啊购买机票、酒店、客栈、门票、度假产品全面享有成行保障和如实描述",
					single: function() {
						return this.single
					},
					showNoPrompt: function() {
						return this.showNoPrompt
					}
				}
			}]
		}
	}, function(t, e) {
		t.exports = {
			container: {
				width: 750,
				alignItems: "center",
				paddingTop: 40
			},
			btn: {
				width: 600,
				height: 80,
				marginTop: 40,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: 6,
				backgroundColor: "#ffc300"
			},
			red: {
				backgroundColor: "#FC6769",
				borderColor: "#FC6769"
			},
			blue: {
				backgroundColor: "#263238",
				borderColor: "#263238"
			},
			"btn-txt": {
				fontSize: 32,
				color: "#ffffff"
			}
		}
	}, function(t, e, o) {
		t.exports = function(t, e, i) {
			"use strict";
			var n = i("@weex-module/modal");
			o(4), t.exports = {
				data: function() {
					return {
						isShow: !1,
						single: !1,
						showNoPrompt: !1
					}
				},
				created: function() {
					var t = this;
					t.$on("dialog.cancelBtn.click", function(e) {
						t.isShow = !1, n.toast({
							message: "取消回调",
							duration: 1
						})
					}), t.$on("dialog.confirmBtn.click", function(e) {
						t.isShow = !1, n.toast({
							message: "确认回调",
							duration: 1
						})
					}), t.$on("dialog.noPrompt.click", function(t) {
						var e = t.detail.value.isChecked;
						n.toast({
							message: "noPrompt isChecked: " + e,
							duration: 1
						})
					})
				},
				methods: {
					openDialog: function() {
						var t = this;
						t.single = !1, t.showNoPrompt = !1;
						var e = t.$vm("dialog-demo");
						e.appearDialog(!0)
					},
					openSubmitDialog: function() {
						var t = this;
						t.single = !0, t.showNoPrompt = !1;
						var e = t.$vm("dialog-demo");
						e.appearDialog(!0)
					},
					openNoPromptDialog: function() {
						var t = this;
						t.showNoPrompt = !0;
						var e = t.$vm("dialog-demo");
						e.appearDialog(!0)
					}
				}
			}
		}
	}, function(t, e, o) {
		var i = o(5),
			n = o(6),
			r = o(7);
		__weex_define__("@weex-component/wxc-dialog", [], function(t, e, o) {
			r(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = i, o.exports.style = n
		})
	}, function(t, e) {
		t.exports = {
			type: "div",
			classList: ["container"],
			children: [{
				type: "wxc-overlay",
				attr: {
					isShow: function() {
						return this.show
					}
				}
			}, {
				type: "div",
				classList: ["wxc-dialog"],
				shown: function() {
					return this.show
				},
				style: {
					top: function() {
						return this.top
					}
				},
				id: "wxc-dialog",
				children: [{
					type: "div",
					classList: ["dialog-box"],
					children: [{
						type: "div",
						classList: ["dialog-content"],
						children: [{
							type: "text",
							classList: ["content-title"],
							attr: {
								value: function() {
									return this.title
								}
							}
						}, {
							type: "text",
							classList: ["content-subtext"],
							attr: {
								value: function() {
									return this.content
								}
							}
						}, {
							type: "div",
							classList: ["no-prompt"],
							shown: function() {
								return this.showNoPrompt
							},
							events: {
								click: "noPromptClicked"
							},
							children: [{
								type: "image",
								attr: {
									src: function() {
										return this.noPromptIcon
									}
								},
								classList: ["no-prompt-icon"]
							}, {
								type: "text",
								classList: ["no-prompt-text"],
								attr: {
									value: function() {
										return this.noPromptText
									}
								}
							}]
						}]
					}, {
						type: "div",
						classList: ["dialog-footer"],
						children: [{
							type: "div",
							classList: ["footer-btn", "cancel"],
							shown: function() {
								return !this.single
							},
							events: {
								click: "secondaryClicked"
							},
							children: [{
								type: "text",
								classList: ["btn-text"],
								style: {
									color: function() {
										return this.secondBtnColor
									}
								},
								attr: {
									value: function() {
										return this.cancelText
									}
								}
							}]
						}, {
							type: "div",
							classList: ["footer-btn", "confirm"],
							events: {
								click: "primaryClicked"
							},
							children: [{
								type: "text",
								classList: ["btn-text"],
								style: {
									color: function() {
										return this.mainBtnColor
									}
								},
								attr: {
									value: function() {
										return this.confirmText
									}
								}
							}]
						}]
					}]
				}]
			}]
		}
	}, function(t, e) {
		t.exports = {
			container: {
				width: 750,
				position: "fixed"
			},
			"wxc-dialog": {
				backgroundColor: "rgba(0,0,0,0)",
				height: 600,
				width: 750,
				justifyContent: "center",
				alignItems: "center",
				position: "fixed",
				top: 467,
				left: 0
			},
			"dialog-box": {
				backgroundColor: "#FFFFFF",
				width: 558
			},
			"dialog-content": {
				paddingTop: 36,
				paddingBottom: 36,
				paddingLeft: 36,
				paddingRight: 36
			},
			"content-title": {
				color: "#333333",
				fontSize: 36,
				textAlign: "center",
				marginBottom: 24
			},
			"content-subtext": {
				color: "#666666",
				fontSize: 26,
				lineHeight: 36
			},
			"dialog-footer": {
				flexDirection: "row",
				alignItems: "center",
				borderTopColor: "#F3F3F3",
				borderTopWidth: 1,
				borderTop: 1
			},
			"footer-btn": {
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				flex: 1,
				height: 90
			},
			cancel: {
				borderRightColor: "#F3F3F3",
				borderRightWidth: 1,
				borderRight: 1
			},
			"btn-text": {
				fontSize: 36,
				color: "#666666"
			},
			"no-prompt": {
				width: 486,
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "row",
				marginTop: 24
			},
			"no-prompt-icon": {
				width: 24,
				height: 24,
				marginRight: 12
			},
			"no-prompt-text": {
				fontSize: 24,
				color: "#A5A5A5"
			}
		}
	}, function(t, e, o) {
		t.exports = function(t, e, i) {
			"use strict";
			o(8);
			var n = o(12);
			t.exports = {
				data: function() {
					return {
						show: !1,
						single: !1,
						title: "",
						content: "",
						cancelText: "取消",
						confirmText: "确定",
						top: 367,
						positionTop: 0,
						mainBtnColor: "#EE9900",
						secondBtnColor: "#666666",
						showNoPrompt: !0,
						noPromptText: "不再提示",
						noPromptIcon: n.unChecked,
						isChecked: !1
					}
				},
				created: function() {
					var t = this,
						e = t.$getConfig(),
						o = e.env,
						i = e.env.platform.toLocaleUpperCase(),
						n = 200;
					"WEB" === i && (n = 0), t.top = 0 == t.positionTop ? (o.deviceHeight / o.deviceWidth * 750 - 600 - n) / 2 : t.positionTop
				},
				methods: {
					secondaryClicked: function() {
						var t = this;
						t.appearDialog(!1), t.$dispatch("dialog.cancelBtn.click", {
							value: {
								name: "cancel"
							}
						})
					},
					primaryClicked: function(t) {
						var e = this;
						e.appearDialog(!1), e.$dispatch("dialog.confirmBtn.click", {
							value: {
								name: "confirm"
							}
						})
					},
					appearDialog: function(t) {
						var e = this;
						e.show = t
					},
					noPromptClicked: function(t) {
						var e = this,
							o = e.isChecked;
						e.noPromptIcon = o ? n.unChecked : n.checked, e.isChecked = !o, e.$dispatch("dialog.noPrompt.click", {
							value: {
								isChecked: e.isChecked
							}
						})
					}
				}
			}
		}
	}, function(t, e, o) {
		var i = o(9),
			n = o(10),
			r = o(11);
		__weex_define__("@weex-component/wxc-overlay", [], function(t, e, o) {
			r(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = i, o.exports.style = n
		})
	}, function(t, e) {
		t.exports = {
			type: "div",
			classList: ["wxc-overlay"],
			shown: function() {
				return this.isShow
			},
			events: {
				click: "overlayClicked"
			},
			style: {
				position: function() {
					return this.position
				},
				height: function() {
					return 2 * this.height
				},
				top: function() {
					return -this.height
				},
				backgroundColor: function() {
					return "rgba(0, 0, 0," + this.opacity + ")"
				}
			}
		}
	}, function(t, e) {
		t.exports = {
			"wxc-overlay": {
				position: "absolute",
				width: 1500,
				flex: 1,
				left: -750
			}
		}
	}, function(t, e) {
		t.exports = function(t, e, o) {
			"use strict";
			t.exports = {
				data: function() {
					return {
						isShow: !1,
						opacity: .6,
						height: 1e3,
						position: "absolute"
					}
				},
				created: function() {
					var t = this,
						e = t.$getConfig(),
						o = e.env,
						i = o.platform.toLowerCase();
					t.height = o.deviceHeight / o.deviceWidth * 750, "android" === i && (t.position = "fixed")
				},
				methods: {
					overlayClicked: function(t) {
						this.$dispatch("overlay.body.click", {
							e: t
						})
					}
				}
			}
		}
	}, function(t, e) {
		"use strict";
		t.exports = {
			checked: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAADsUlEQVRYCe2Za4hNURTH/3vf91teMwx5k7xf4zGRPJopJCVfaDDKK4R88EnKB4UiMh4pCfFB+TBDEVFKJmHIUIy3YR7mjjn3zr1zH+ccrX2diUz3njuOO1fd/eGeffZae63fXevsszt7MfxsNXth7dN32AbO+UpVxRjG4NZkmbyqKoKMoUZRlItNjW9OjdmLKPln9PPpxIACO3NUMmBiJqFS+VKB6nY1vHjgps91jCLZN39EFUFy32A4p++CtWAWmLVbAgo1GkS07j5CVYegtL4HwTbWv57OGsuHbeWcHyVI37Ir4DZvqj+aEbkSkdB6dbmAVRRlG6dnkjxTJLMFkniIhZhEn/OVnBYO3VC6s61pTMTItdXdXc9ksuBoTMTIkylmkywHanQ2chHNRdToCKSyF6t/DP/5IgRubkmlKuRmXVoGK8UbnyFwfR3UWBtiDU90Wc/4Yop/ewHpWpmAhNkBz4Ij2Qca97+GdG0t1KgEmGzwlpyEpd+07AKVv7+FVFkKtb0F4BZ4isthKZipC5KUMpJ6WfoIqWI11HAzwM3wLDwG68DZuiEzAioH6iBVlEIJNQDMBPf8w7AOnpcWZNqgqhxLy4HcVp+ADH4BGId73kHYhhanZUNT1p361opS+M8VIvrhjjY36VUJNSUgA5/Ep5lr7n7Yhi9OOieZUDeoIn0AYm0I3NiMSG1FMptQwn5IlavFZwQpuubsg33ksqRzUgl1g3pKToM5egOqjODtXWh/cblT20qkVbyC5JZaIXcV7YF99IpOddMZ1A1q7jUKvqWXwN39Aahou7cH4adnfvOlRIMJyOaXYtw5YzfsY1f9ptPVG92g5MDkGwTv0svgviHCX+jBAYQeJnYW2g4D18sgNz0XMkfhTjgmlHWV6495ae/1Jne+iCztMHLzS4Qfl4PSLftfId5QnYCcsgXOSRv/cPY3A2lFVHPEHT3hXXIB5rzJYihScxHxrw9F3z5xPZxTt2mqhl27BEreuc0D76KzsAwo6oCxj1sD189v8Y5Bgzppp/5Xv8zigKfkFMKPjoPZe8Axfu2vYkP7fwVKJMxkhbNwh6FQnRnrcuo7M/Yvx3KgRkc3F1HDI0pn5mSUTnqzrWlMxEjHjjUESMfR2dY0JmLkVH0gQHFmHpGyhpWOxomJGjGa1kxrqXa5ey1B5Ht+9N1NcFceTK488SLvDmpRbPh4F8Fb2zuKDU0NtRv/m/KNeD1RHYdKJFR9AFClLbBuiWhicVcRCzERG3H8AAOtX+I/9HP9AAAAAElFTkSuQmCC",
			unChecked: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABmElEQVRYCe2ZoU7DUBSGz7mi6ZaR4FEz25Ia3F4AiUHvAVCgeQQ0jgfoGyB5gTpMkw3R1uBJaNqmYof8S5tULWE9HVtyrlhFc//75eu5E+cwNSuOY280Gt0z84qZAyKatO+O/MxFJBaRsCzL1yAIapzP+NlsNlee570x8/WRofYeJyIfdV3fzufzL4bJ8XgcAVJEPpn5qaqq98Vi8bM3ZaCX6/X6wvf9GxF5ZuYZYIuiWHKSJA/OuRdAEtFyOp1+D8Twp9g0TS+JCAJn2+320aEmkQCTpwIJHrCAqWFbARQXh/C58Tyl1TKB0bW3+79qcp+YDtMEoGexDFT7M5lRM6ptQDvPatSMahvQzrMaNaPaBrTzrEbNqLYB7TyrUTOqbUA7z2rUjGob0M6zGh3CaI5QdHq1w/vmdZhyh8Y+AtGO7husvb9lAiNAQxyAnnnTjtY+76A8sICpYQsdRiRo6KNXjp55lmV3HeUHHdJnE84GQ9u/BxsYz2Z8s/t7whwHIxJMH0QkIqLdBetjpsdeDMQisIAJbMj6Bdz9uoyhg7P4AAAAAElFTkSuQmCC"
		}
	}])
});