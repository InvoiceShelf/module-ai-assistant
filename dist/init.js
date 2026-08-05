const { Fragment: e, Teleport: t, computed: n, createBlock: r, createCommentVNode: i, createElementBlock: a, createElementVNode: o, createTextVNode: s, createVNode: c, defineComponent: l, h: u, mergeModels: d, nextTick: f, normalizeClass: p, onMounted: m, openBlock: h, reactive: g, ref: _, renderList: v, resolveComponent: y, toDisplayString: b, unref: x, useModel: S, vModelCheckbox: C, vModelDynamic: w, vModelSelect: ee, vModelText: T, watch: te, withCtx: E, withDirectives: ne, withKeys: re, withModifiers: ie } = window.__invoiceshelf_vue;
//#region node_modules/.pnpm/dompurify@3.4.13/node_modules/dompurify/dist/purify.es.mjs
function D(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function ae(e) {
	if (Array.isArray(e)) return e;
}
function oe(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function se() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function O(e, t) {
	return ae(e) || oe(e, t) || k(e, t) || se();
}
function k(e, t) {
	if (e) {
		if (typeof e == "string") return D(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? D(e, t) : void 0;
	}
}
var ce = Object.entries, le = Object.setPrototypeOf, ue = Object.isFrozen, de = Object.getPrototypeOf, fe = Object.getOwnPropertyDescriptor, A = Object.freeze, j = Object.seal, pe = Object.create, me = typeof Reflect < "u" && Reflect, he = me.apply, ge = me.construct;
A ||= function(e) {
	return e;
}, j ||= function(e) {
	return e;
}, he ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, ge ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var _e = I(Array.prototype.forEach), ve = I(Array.prototype.lastIndexOf), ye = I(Array.prototype.pop), be = I(Array.prototype.push), xe = I(Array.prototype.splice), Se = Array.isArray, Ce = I(String.prototype.toLowerCase), we = I(String.prototype.toString), Te = I(String.prototype.match), Ee = I(String.prototype.replace), De = I(String.prototype.indexOf), Oe = I(String.prototype.trim), ke = I(Number.prototype.toString), Ae = I(Boolean.prototype.toString), M = typeof BigInt > "u" ? null : I(BigInt.prototype.toString), je = typeof Symbol > "u" ? null : I(Symbol.prototype.toString), N = I(Object.prototype.hasOwnProperty), P = I(Object.prototype.toString), F = I(RegExp.prototype.test), Me = L(TypeError);
function I(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return he(e, t, n);
	};
}
function L(e) {
	return function() {
		return ge(e, [...arguments]);
	};
}
function R(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ce;
	if (le && le(e, null), !Se(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (ue(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function Ne(e) {
	for (let t = 0; t < e.length; t++) N(e, t) || (e[t] = null);
	return e;
}
function z(e) {
	let t = pe(null);
	for (let r of ce(e)) {
		var n = O(r, 2);
		let i = n[0], a = n[1];
		N(e, i) && (t[i] = Se(a) ? Ne(a) : a && typeof a == "object" && a.constructor === Object ? z(a) : a);
	}
	return t;
}
function Pe(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return ke(e);
		case "boolean": return Ae(e);
		case "bigint": return M ? M(e) : "0";
		case "symbol": return je ? je(e) : "Symbol()";
		case "undefined": return P(e);
		case "function":
		case "object": {
			if (e === null) return P(e);
			let t = e, n = B(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : P(e);
			}
			return P(e);
		}
		default: return P(e);
	}
}
function B(e, t) {
	for (; e !== null;) {
		let n = fe(e, t);
		if (n) {
			if (n.get) return I(n.get);
			if (typeof n.value == "function") return I(n.value);
		}
		e = de(e);
	}
	function n() {
		return null;
	}
	return n;
}
function Fe(e) {
	try {
		return F(e, ""), !0;
	} catch {
		return !1;
	}
}
var Ie = A(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Le = A(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Re = A([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), ze = A([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Be = A(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Ve = A([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), He = A(["#text"]), Ue = A(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), We = A(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Ge = A(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Ke = A([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), qe = j(/{{[\w\W]*|^[\w\W]*}}/g), Je = j(/<%[\w\W]*|^[\w\W]*%>/g), Ye = j(/\${[\w\W]*/g), Xe = j(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ze = j(/^aria-[\-\w]+$/), Qe = j(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), $e = j(/^(?:\w+script|data):/i), et = j(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), tt = j(/^html$/i), nt = j(/^[a-z][.\w]*(-[.\w]+)+$/i), rt = j(/<[/\w!]/g), it = j(/<[/\w]/g), at = j(/<\/no(script|embed|frames)/i), ot = j(/\/>/i), V = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, st = function() {
	return typeof window > "u" ? null : window;
}, ct = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, lt = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, ut = function(e, t, n, r) {
	return N(e, t) && Se(e[t]) ? R(r.base ? z(r.base) : {}, e[t], r.transform) : n;
};
function dt() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : st(), t = (e) => dt(e);
	if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== V.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, f = B(d, "cloneNode"), p = B(d, "remove"), m = B(d, "nextSibling"), h = B(d, "childNodes"), g = B(d, "parentNode"), _ = B(d, "shadowRoot"), v = B(d, "attributes"), y = o && o.prototype ? B(o.prototype, "nodeType") : null, b = o && o.prototype ? B(o.prototype, "nodeName") : null, x = o && o.prototype ? B(o.prototype, "ownerDocument") : null;
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let S, C = "", w, ee = !1, T = 0, te = function() {
		if (T > 0) throw Me("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, E = function(e) {
		te(), T++;
		try {
			return S.createHTML(e);
		} finally {
			T--;
		}
	}, ne = function(e) {
		te(), T++;
		try {
			return S.createScriptURL(e);
		} finally {
			T--;
		}
	}, re = function() {
		return ee ||= (w = ct(u, i), !0), w;
	}, ie = n, D = ie.implementation, ae = ie.createNodeIterator, oe = ie.createDocumentFragment, se = ie.getElementsByTagName, O = r.importNode, k = lt();
	t.isSupported = typeof ce == "function" && typeof g == "function" && D && D.createHTMLDocument !== void 0;
	let le = qe, ue = Je, de = Ye, fe = Xe, me = Ze, he = $e, ge = et, ke = nt, Ae = Qe, M = null, je = R({}, [
		...Ie,
		...Le,
		...Re,
		...Be,
		...He
	]), P = null, I = R({}, [
		...Ue,
		...We,
		...Ge,
		...Ke
	]), L = Object.seal(pe(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), Ne = null, ft = null, H = Object.seal(pe(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), pt = !0, mt = !0, ht = !1, gt = !0, U = !1, _t = !0, W = !1, vt = !1, yt = null, bt = null, xt = !1, St = !1, Ct = !1, wt = !1, Tt = !0, Et = !1, Dt = "user-content-", Ot = !0, kt = !1, At = {}, G = null, jt = R({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Mt = null, Nt = R({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Pt = null, Ft = R({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), It = "http://www.w3.org/1998/Math/MathML", Lt = "http://www.w3.org/2000/svg", K = "http://www.w3.org/1999/xhtml", Rt = K, zt = !1, Bt = null, Vt = R({}, [
		It,
		Lt,
		K
	], we), Ht = A([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Ut = R({}, Ht), q = A(["annotation-xml"]), Wt = R({}, q), Gt = R({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Kt = null, qt = ["application/xhtml+xml", "text/html"], J = null, Jt = null, Yt = n.createElement("form"), Xt = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Zt = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (Jt && Jt === e) return;
		(!e || typeof e != "object") && (e = {}), e = z(e), Kt = qt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, J = Kt === "application/xhtml+xml" ? we : Ce, M = ut(e, "ALLOWED_TAGS", je, { transform: J }), P = ut(e, "ALLOWED_ATTR", I, { transform: J }), Bt = ut(e, "ALLOWED_NAMESPACES", Vt, { transform: we }), Pt = ut(e, "ADD_URI_SAFE_ATTR", Ft, {
			transform: J,
			base: Ft
		}), Mt = ut(e, "ADD_DATA_URI_TAGS", Nt, {
			transform: J,
			base: Nt
		}), G = ut(e, "FORBID_CONTENTS", jt, { transform: J }), Ne = ut(e, "FORBID_TAGS", z({}), { transform: J }), ft = ut(e, "FORBID_ATTR", z({}), { transform: J }), At = N(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? z(e.USE_PROFILES) : e.USE_PROFILES : !1, pt = e.ALLOW_ARIA_ATTR !== !1, mt = e.ALLOW_DATA_ATTR !== !1, ht = e.ALLOW_UNKNOWN_PROTOCOLS || !1, gt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, U = e.SAFE_FOR_TEMPLATES || !1, _t = e.SAFE_FOR_XML !== !1, W = e.WHOLE_DOCUMENT || !1, St = e.RETURN_DOM || !1, Ct = e.RETURN_DOM_FRAGMENT || !1, wt = e.RETURN_TRUSTED_TYPE || !1, xt = e.FORCE_BODY || !1, Tt = e.SANITIZE_DOM !== !1, Et = e.SANITIZE_NAMED_PROPS || !1, Ot = e.KEEP_CONTENT !== !1, kt = e.IN_PLACE || !1, Ae = Fe(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : Qe, Rt = typeof e.NAMESPACE == "string" ? e.NAMESPACE : K, Ut = N(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? z(e.MATHML_TEXT_INTEGRATION_POINTS) : R({}, Ht), Wt = N(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? z(e.HTML_INTEGRATION_POINTS) : R({}, q);
		let t = N(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? z(e.CUSTOM_ELEMENT_HANDLING) : pe(null);
		if (L = pe(null), N(t, "tagNameCheck") && Xt(t.tagNameCheck) && (L.tagNameCheck = t.tagNameCheck), N(t, "attributeNameCheck") && Xt(t.attributeNameCheck) && (L.attributeNameCheck = t.attributeNameCheck), N(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), j(L), U && (mt = !1), Ct && (St = !0), At && (M = R({}, He), P = pe(null), At.html === !0 && (R(M, Ie), R(P, Ue)), At.svg === !0 && (R(M, Le), R(P, We), R(P, Ke)), At.svgFilters === !0 && (R(M, Re), R(P, We), R(P, Ke)), At.mathMl === !0 && (R(M, Be), R(P, Ge), R(P, Ke))), H.tagCheck = null, H.attributeCheck = null, N(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? H.tagCheck = e.ADD_TAGS : Se(e.ADD_TAGS) && (M === je && (M = z(M)), R(M, e.ADD_TAGS, J))), N(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? H.attributeCheck = e.ADD_ATTR : Se(e.ADD_ATTR) && (P === I && (P = z(P)), R(P, e.ADD_ATTR, J))), N(e, "ADD_URI_SAFE_ATTR") && Se(e.ADD_URI_SAFE_ATTR) && R(Pt, e.ADD_URI_SAFE_ATTR, J), N(e, "FORBID_CONTENTS") && Se(e.FORBID_CONTENTS) && (G === jt && (G = z(G)), R(G, e.FORBID_CONTENTS, J)), N(e, "ADD_FORBID_CONTENTS") && Se(e.ADD_FORBID_CONTENTS) && (G === jt && (G = z(G)), R(G, e.ADD_FORBID_CONTENTS, J)), Ot && (M["#text"] = !0), W && R(M, [
			"html",
			"head",
			"body"
		]), M.table && (R(M, ["tbody"]), delete Ne.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw Me("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Me("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = S;
			S = e.TRUSTED_TYPES_POLICY;
			try {
				C = E("");
			} catch (e) {
				throw S = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (S = void 0, C = "") : (S === void 0 && (S = re()), S && typeof C == "string" && (C = E("")));
		A && A(e), Jt = e;
	}, Qt = R({}, [
		...Le,
		...Re,
		...ze
	]), $t = R({}, [...Be, ...Ve]), en = function(e, t, n) {
		return t.namespaceURI === K ? e === "svg" : t.namespaceURI === It ? e === "svg" && (n === "annotation-xml" || Ut[n]) : !!Qt[e];
	}, tn = function(e, t, n) {
		return t.namespaceURI === K ? e === "math" : t.namespaceURI === Lt ? e === "math" && Wt[n] : !!$t[e];
	}, nn = function(e, t, n) {
		return t.namespaceURI === Lt && !Wt[n] || t.namespaceURI === It && !Ut[n] ? !1 : !$t[e] && (Gt[e] || !Qt[e]);
	}, rn = function(e) {
		let t = g(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: Rt,
			tagName: "template"
		});
		let n = Ce(e.tagName), r = Ce(t.tagName);
		return Bt[e.namespaceURI] ? e.namespaceURI === Lt ? en(n, t, r) : e.namespaceURI === It ? tn(n, t, r) : e.namespaceURI === K ? nn(n, t, r) : !!(Kt === "application/xhtml+xml" && Bt[e.namespaceURI]) : !1;
	}, an = function(e) {
		be(t.removed, { element: e });
		try {
			g(e).removeChild(e);
		} catch {
			if (p(e), !g(e)) throw Me("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, on = function(e) {
		ln(e);
		let t = h(e);
		if (t) {
			let e = [];
			_e(t, (t) => {
				be(e, t);
			}), _e(e, (e) => {
				try {
					p(e);
				} catch {}
			});
		}
		let n = v(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			if (typeof i == "string") try {
				e.removeAttribute(i);
			} catch {}
		}
	}, sn = function(e, n) {
		try {
			be(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			be(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") if (St || Ct) try {
			an(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, cn = function(e) {
		let t = v(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			if (!(typeof i != "string" || P[J(i)])) try {
				e.removeAttribute(i);
			} catch {}
		}
	}, ln = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			(y ? y(e) : e.nodeType) === V.element && cn(e);
			let n = h(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, un = function(e) {
		if (!_t) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = y ? y(e) : e.nodeType;
			if (n === V.processingInstruction || n === V.comment && F(it, e.data)) {
				try {
					p(e);
				} catch {}
				continue;
			}
			if (n === V.element) {
				let t = e, n = J(b ? b(e) : e.nodeName);
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && n !== "label" && n !== "output" && t.removeAttribute("for");
				} catch {}
			}
			let r = h(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, dn = function(e) {
		let t = null, r = null;
		if (xt) e = "<remove></remove>" + e;
		else {
			let t = Te(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Kt === "application/xhtml+xml" && Rt === K && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = S ? E(e) : e;
		if (Rt === K) try {
			t = new l().parseFromString(i, Kt);
		} catch {}
		if (!t || !t.documentElement) {
			t = D.createDocument(Rt, "template", null);
			try {
				t.documentElement.innerHTML = zt ? C : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Rt === K ? se.call(t, W ? "html" : "body")[0] : W ? t.documentElement : a;
	}, fn = function(e) {
		let t = x ? x(e) : e.ownerDocument;
		return ae.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, pn = function(e) {
		return e = Ee(e, le, " "), e = Ee(e, ue, " "), e = Ee(e, de, " "), e;
	}, mn = function(e) {
		e.normalize();
		let t = x ? x(e) : e.ownerDocument, n = ae.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = pn(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && _e(i, (e) => {
			gn(e.content) && mn(e.content);
		});
	}, hn = function(e) {
		let t = b ? b(e) : null;
		return typeof t != "string" || J(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== v(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== y(e) || e.childNodes !== h(e);
	}, gn = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return y(e) === V.documentFragment;
		} catch {
			return !1;
		}
	}, _n = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return typeof y(e) == "number";
		} catch {
			return !1;
		}
	};
	function Y(e, n, r) {
		e.length !== 0 && _e(e, (e) => {
			e.call(t, n, r, Jt);
		});
	}
	let vn = function(e, t) {
		return !!(_t && e.hasChildNodes() && !_n(e.firstElementChild) && F(rt, e.textContent) && F(rt, e.innerHTML) || _t && e.namespaceURI === K && t === "style" && _n(e.firstElementChild) || e.nodeType === V.processingInstruction || _t && e.nodeType === V.comment && F(it, e.data));
	}, yn = function(e, t, n) {
		if (!Ne[t] && wn(t) && (L.tagNameCheck instanceof RegExp && F(L.tagNameCheck, t) || L.tagNameCheck instanceof Function && L.tagNameCheck(t))) return !1;
		if (Ot && !G[t]) {
			let t = g(e), r = h(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? f(r[a], !0) : r[a];
					t.insertBefore(i, m(e));
				}
			}
		}
		return an(e), !0;
	}, bn = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? z(t) : t;
	}, xn = function(e, n) {
		if (Y(k.beforeSanitizeElements, e, null), e !== n && g(e) === null) return kt && ln(e), !0;
		if (hn(e)) return an(e), !0;
		let r = J(b ? b(e) : e.nodeName);
		if (M = bn(k.uponSanitizeElement, M, je, yt), Y(k.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: M
		}), e !== n && g(e) === null) return kt && ln(e), !0;
		if (vn(e, r)) return an(e), !0;
		if (Ne[r] || !(H.tagCheck instanceof Function && H.tagCheck(r)) && !M[r]) {
			let t = yn(e, r, n);
			return t === !1 && Y(k.afterSanitizeElements, e, null), t;
		}
		if ((y ? y(e) : e.nodeType) === V.element && !rn(e) || (r === "noscript" || r === "noembed" || r === "noframes") && F(at, e.innerHTML)) return an(e), !0;
		if (U && e.nodeType === V.text) {
			let n = pn(e.textContent);
			e.textContent !== n && (be(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return Y(k.afterSanitizeElements, e, null), !1;
	}, Sn = function(e, t, r) {
		if (ft[t] || _t && t === "patchsrc" || _t && t === "for" && e !== "label" && e !== "output" || Tt && (t === "id" || t === "name") && (r in n || r in Yt)) return !1;
		let i = P[t] || H.attributeCheck instanceof Function && H.attributeCheck(t, e);
		if (!(mt && F(fe, t)) && !(pt && F(me, t))) {
			if (!i) {
				if (!(wn(e) && (L.tagNameCheck instanceof RegExp && F(L.tagNameCheck, e) || L.tagNameCheck instanceof Function && L.tagNameCheck(e)) && (L.attributeNameCheck instanceof RegExp && F(L.attributeNameCheck, t) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(t, e)) || t === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && F(L.tagNameCheck, r) || L.tagNameCheck instanceof Function && L.tagNameCheck(r)))) return !1;
			} else if (!Pt[t] && !F(Ae, Ee(r, ge, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && De(r, "data:") === 0 && Mt[e]) && !(ht && !F(he, Ee(r, ge, ""))) && r) return !1;
		}
		return !0;
	}, Cn = R({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), wn = function(e) {
		return !Cn[Ce(e)] && F(ke, e);
	}, Tn = function(e, t, n, r) {
		if (S && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return E(r);
			case "TrustedScriptURL": return ne(r);
		}
		return r;
	}, En = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), hn(e) ? an(e) : ye(t.removed);
		} catch {
			sn(n, e);
		}
	}, X = function(e) {
		Y(k.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || hn(e)) return;
		P = bn(k.uponSanitizeAttribute, P, I, bt);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: P,
			forceKeepAttr: void 0
		}, r = t.length, i = J(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = J(o), u = c, d = o === "value" ? u : Oe(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, Y(k.uponSanitizeAttribute, e, n), d = n.attrValue, Et && (l === "id" || l === "name") && De(d, Dt) !== 0 && (sn(o, e), d = Dt + d), _t && F(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				sn(o, e);
				continue;
			}
			if (l === "attributename" && Te(d, "href")) {
				sn(o, e);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					sn(o, e);
					continue;
				}
				if (!gt && F(ot, d)) {
					sn(o, e);
					continue;
				}
				if (U && (d = pn(d)), !Sn(i, l, d)) {
					sn(o, e);
					continue;
				}
				d = Tn(i, l, s, d), d !== u && En(e, o, s, d);
			}
		}
		Y(k.afterSanitizeAttributes, e, null);
	}, Dn = function(e) {
		let t = null, n = fn(e);
		for (Y(k.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (Y(k.uponSanitizeShadowNode, t, null), xn(t, e), X(t), gn(t.content) && Dn(t.content), (y ? y(t) : t.nodeType) === V.element) {
			let e = _(t);
			gn(e) && (On(e), Dn(e));
		}
		Y(k.afterSanitizeShadowDOM, e, null);
	}, On = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				Dn(e.shadow);
				continue;
			}
			let n = e.node, r = (y ? y(n) : n.nodeType) === V.element, i = h(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = b ? b(n) : null;
				if (typeof e == "string" && J(e) === "template") {
					let e = n.content;
					gn(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = _(n);
				gn(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (zt = !e, zt && (e = "<!-->"), typeof e != "string" && !_n(e) && (e = Pe(e), typeof e != "string")) throw Me("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		vt ? (M = yt, P = bt) : Zt(n), (k.uponSanitizeElement.length > 0 || k.uponSanitizeAttribute.length > 0) && (M = z(M)), k.uponSanitizeAttribute.length > 0 && (P = z(P)), t.removed = [];
		let c = kt && typeof e != "string" && _n(e);
		if (c) {
			un(e);
			let t = b ? b(e) : e.nodeName;
			if (typeof t == "string") {
				let n = J(t);
				if (!M[n] || Ne[n]) throw on(e), Me("root node is forbidden and cannot be sanitized in-place");
			}
			if (hn(e)) throw on(e), Me("root node is clobbered and cannot be sanitized in-place");
			try {
				On(e);
			} catch (t) {
				throw on(e), t;
			}
		} else if (_n(e)) i = dn("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === V.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), On(a);
		else {
			if (!St && !U && !W && e.indexOf("<") === -1) return S && wt ? E(e) : e;
			if (i = dn(e), !i) return St ? null : wt ? C : "";
		}
		i && xt && an(i.firstChild);
		let l = c ? e : i;
		try {
			let e = fn(l);
			for (; o = e.nextNode();) xn(o, l), X(o), gn(o.content) && Dn(o.content);
		} catch (n) {
			throw c && (on(e), _e(t.removed, (e) => {
				e.element && ln(e.element);
			})), n;
		}
		if (c) return _e(t.removed, (e) => {
			e.element && ln(e.element);
		}), U && mn(e), e;
		if (St) {
			if (U && mn(i), Ct) for (s = oe.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (P.shadowroot || P.shadowrootmode) && (s = O.call(r, s, !0)), s;
		}
		let u = W ? i.outerHTML : i.innerHTML;
		return W && M["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && F(tt, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), U && (u = pn(u)), S && wt ? E(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Zt(e), vt = !0, yt = M, bt = P;
	}, t.clearConfig = function() {
		Jt = null, vt = !1, yt = null, bt = null, S = w, C = "";
	}, t.isValidAttribute = function(e, t, n) {
		Jt || Zt({});
		let r = J(e), i = J(t);
		return Sn(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && N(k, e) && be(k[e], t);
	}, t.removeHook = function(e, t) {
		if (N(k, e)) {
			if (t !== void 0) {
				let n = ve(k[e], t);
				return n === -1 ? void 0 : xe(k[e], n, 1)[0];
			}
			return ye(k[e]);
		}
	}, t.removeHooks = function(e) {
		N(k, e) && (k[e] = []);
	}, t.removeAllHooks = function() {
		k = lt();
	}, t;
}
var ft = dt();
//#endregion
//#region node_modules/.pnpm/marked@18.0.9/node_modules/marked/lib/marked.esm.js
function H() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var pt = H();
function mt(e) {
	pt = e;
}
var ht = { exec: () => null };
function gt(e) {
	let t = [];
	return (n) => {
		let r = Math.max(0, Math.min(3, n - 1)), i = t[r];
		return i || (i = e(r), t[r] = i), i;
	};
}
function U(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(W.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var _t = ((e = "") => {
	try {
		return !!RegExp("(?<=1)(?<!1)" + e);
	} catch {
		return !1;
	}
})(), W = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: gt((e) => RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
	hrRegex: gt((e) => RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),
	fencesBeginRegex: gt((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
	headingBeginRegex: gt((e) => RegExp(`^ {0,${e}}#`)),
	htmlBeginRegex: gt((e) => RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`, "i")),
	blockquoteBeginRegex: gt((e) => RegExp(`^ {0,${e}}>`))
}, vt = /^(?:[ \t]*(?:\n|$))+/, yt = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, bt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, xt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, St = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ct = / {0,3}(?:[*+-]|\d{1,9}[.)])/, wt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Tt = U(wt).replace(/bull/g, Ct).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Et = U(wt).replace(/bull/g, Ct).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Dt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/, Ot = /^[^\n]+/, kt = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, At = U(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", kt).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), G = U(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, Ct).getRegex(), jt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Mt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Nt = U("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Mt).replace("tag", jt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Pt = (e) => U(Dt).replace("hr", xt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", e).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jt).getRegex(), Ft = Pt(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/), It = Pt(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/), Lt = {
	blockquote: U(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", It).getRegex(),
	code: yt,
	def: At,
	fences: bt,
	heading: St,
	hr: xt,
	html: Nt,
	lheading: Tt,
	list: G,
	newline: vt,
	paragraph: Ft,
	table: ht,
	text: Ot
}, K = U("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", xt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jt).getRegex(), Rt = {
	...Lt,
	lheading: Et,
	table: K,
	paragraph: U(Dt).replace("hr", xt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", K).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jt).getRegex()
}, zt = {
	...Lt,
	html: U("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Mt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: ht,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: U(Dt).replace("hr", xt).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Tt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Bt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Vt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ht = /^( {2,}|\\)\n(?!\s*$)/, Ut = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, q = /[\p{P}\p{S}]/u, Wt = /[\s\p{P}\p{S}]/u, Gt = /[^\s\p{P}\p{S}]/u, Kt = U(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Wt).getRegex(), qt = /[\p{Pi}\p{Ps}"']/u, J = /(?!~)[\p{P}\p{S}]/u, Jt = /(?!~)[\s\p{P}\p{S}]/u, Yt = /(?:[^\s\p{P}\p{S}]|~)/u, Xt = U(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", _t ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Zt = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Qt = U(Zt, "u").replace(/punct/g, q).getRegex(), $t = U(Zt, "u").replace(/punct/g, J).getRegex(), en = U(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, "u").replace(/openQuote/g, qt).replace(/punct/g, q).getRegex(), tn = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", nn = U(tn, "gu").replace(/notPunctSpace/g, Gt).replace(/punctSpace/g, Wt).replace(/punct/g, q).getRegex(), rn = U(tn, "gu").replace(/notPunctSpace/g, Yt).replace(/punctSpace/g, Jt).replace(/punct/g, J).getRegex(), an = U("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Gt).replace(/punctSpace/g, Wt).replace(/punct/g, q).getRegex(), on = U("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Gt).replace(/punctSpace/g, Wt).replace(/punct/g, q).getRegex(), sn = U("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Gt).replace(/punctSpace/g, Wt).replace(/punct/g, q).getRegex(), cn = U(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, q).getRegex(), ln = U("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Gt).replace(/punctSpace/g, Wt).replace(/punct/g, q).getRegex(), un = U(/\\(punct)/, "gu").replace(/punct/g, q).getRegex(), dn = U(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), fn = U(Mt).replace("(?:-->|$)", "-->").getRegex(), pn = U("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", fn).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), mn = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, hn = U(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", mn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), gn = U(/^!?\[(label)\]\[(ref)\]/).replace("label", mn).replace("ref", kt).getRegex(), _n = U(/^!?\[(ref)\](?:\[\])?/).replace("ref", kt).getRegex(), Y = U("reflink|nolink(?!\\()", "g").replace("reflink", gn).replace("nolink", _n).getRegex(), vn = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, yn = {
	_backpedal: ht,
	anyPunctuation: un,
	autolink: dn,
	blockSkip: Xt,
	br: Ht,
	code: Vt,
	del: ht,
	delLDelim: ht,
	delRDelim: ht,
	emStrongLDelim: Qt,
	emStrongRDelimAst: nn,
	emStrongRDelimUnd: on,
	escape: Bt,
	link: hn,
	nolink: _n,
	punctuation: Kt,
	reflink: gn,
	reflinkSearch: Y,
	tag: pn,
	text: Ut,
	url: ht
}, bn = {
	...yn,
	emStrongLDelim: en,
	emStrongRDelimAst: an,
	emStrongRDelimUnd: sn,
	link: U(/^!?\[(label)\]\((.*?)\)/).replace("label", mn).getRegex(),
	reflink: U(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", mn).getRegex()
}, xn = {
	...yn,
	emStrongRDelimAst: rn,
	emStrongLDelim: $t,
	delLDelim: cn,
	delRDelim: ln,
	url: U(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", vn).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: U(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", vn).getRegex()
}, Sn = {
	...xn,
	br: U(Ht).replace("{2,}", "*").getRegex(),
	text: U(xn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Cn = {
	normal: Lt,
	gfm: Rt,
	pedantic: zt
}, wn = {
	normal: yn,
	gfm: xn,
	breaks: Sn,
	pedantic: bn
}, Tn = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, En = (e) => Tn[e];
function X(e, t) {
	if (t) {
		if (W.escapeTest.test(e)) return e.replace(W.escapeReplace, En);
	} else if (W.escapeTestNoEncode.test(e)) return e.replace(W.escapeReplaceNoEncode, En);
	return e;
}
function Dn(e) {
	try {
		e = encodeURI(e).replace(W.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function On(e, t) {
	let n = e.replace(W.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(W.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) if (n.length > t) n.splice(t);
	else for (; n.length < t;) n.push("");
	for (; r < n.length; r++) n[r] = n[r].trim().replace(W.slashPipe, "|");
	return n;
}
function kn(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function An(e) {
	let t = e.split("\n"), n = t.length - 1;
	for (; n >= 0 && W.blankLine.test(t[n]);) n--;
	return t.length - n <= 2 ? e : t.slice(0, n + 1).join("\n");
}
function jn(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function Mn(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function Nn(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
	r.state.inLink = !0;
	let c = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: r.inlineTokens(s)
	};
	return r.state.inLink = !1, c;
}
function Pn(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return r.length >= i.length ? e.slice(i.length) : e;
	}).join("\n");
}
var Fn = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || pt;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = this.options.pedantic ? t[0] : An(t[0]);
			return {
				type: "code",
				raw: e,
				codeBlockStyle: "indented",
				text: e.replace(this.rules.other.codeRemoveIndent, "")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = Pn(e, t[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = kn(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: kn(t[0], "\n"),
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: kn(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = kn(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o;
				for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === "code") break;
				if (u?.type === "blockquote") {
					let t = u, a = e.join("\n"), o = t.raw + "\n" + a.replace(this.rules.other.blockquoteSetextReplace2, ""), s = this.blockquote(o);
					i[i.length - 1] = s, n = `${n}
${a}`, r = r.substring(0, r.length - t.text.length) + s.text;
					break;
				}
				if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = t[1].trim(), r = n.length > 1, i = {
				type: "list",
				raw: "",
				ordered: r,
				start: r ? +n.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
			let a = this.rules.other.listItemRegex(n), o = !1;
			for (; e;) {
				let n = !1, r = "", s = "";
				if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
				r = t[0], e = e.substring(r.length);
				let c = Mn(t[2].split("\n", 1)[0], t[1].length), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = c.search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d), f = this.rules.other.blockquoteBeginRegex(d);
					for (; e;) {
						let p = e.split("\n", 1)[0], m;
						if (l = p, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), m = l) : m = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || f.test(l) || t.test(l) || n.test(l)) break;
						if (m.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + m.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						u = !l.trim(), r += p + "\n", e = e.substring(p.length + 1), c = m.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0)), i.items.push({
					type: "list_item",
					raw: r,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e of i.items) {
				this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []);
				let t = e.tokens[0];
				if (e.task && (t?.type === "text" || t?.type === "paragraph")) {
					e.text = e.text.replace(this.rules.other.listReplaceTask, ""), t.raw = t.raw.replace(this.rules.other.listReplaceTask, ""), t.text = t.text.replace(this.rules.other.listReplaceTask, "");
					for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
						this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
						break;
					}
					let n = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (n) {
						let t = {
							type: "checkbox",
							raw: n[0] + " ",
							checked: n[0] !== "[ ]"
						};
						e.checked = t.checked, i.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = t.raw + e.tokens[0].raw, e.tokens[0].text = t.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(t)) : e.tokens.unshift({
							type: "paragraph",
							raw: t.raw,
							text: t.raw,
							tokens: [t]
						}) : e.tokens.unshift(t);
					}
				} else e.task &&= !1;
				if (!i.loose) {
					let t = e.tokens.filter((e) => e.type === "space");
					i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
				}
			}
			if (i.loose) for (let e of i.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === "text" && (t.type = "paragraph");
			}
			return i;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) {
			let e = An(t[0]);
			return {
				type: "html",
				block: !0,
				raw: e,
				pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
				text: e
			};
		}
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: kn(t[0], "\n"),
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = On(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: kn(t[0], "\n"),
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(On(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) {
			let e = t[1].trim();
			return {
				type: "heading",
				raw: kn(t[0], "\n"),
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let e = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let t = kn(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = jn(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let n = t[2], r = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(n);
				e && (n = e[1], r = e[3]);
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), Nn(t, {
				href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
				title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return Nn(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
			let i = [...r[0]].length - 1, a, o, s = i, c = 0, l = r[0][0], u = n === l, d = l === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (d.lastIndex = 0, t = t.slice(-1 * e.length + i); (r = d.exec(t)) !== null;) {
				if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
				if (o = [...a].length, r[3] || r[4]) {
					s += o;
					continue;
				}
				if (r[5] || r[6]) {
					if (i % 3 && !((i + o) % 3)) {
						c += o;
						continue;
					}
					if (u) break;
				}
				if (s -= o, s > 0) continue;
				o = Math.min(o, o + s + c);
				let t = [...r[0]][0].length, n = e.slice(0, i + r.index + t + o);
				if (Math.min(i, o) % 2) {
					let e = n.slice(1, -1);
					return {
						type: "em",
						raw: n,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let l = n.slice(2, -2);
				return {
					type: "strong",
					raw: n,
					text: l,
					tokens: this.lexer.inlineTokens(l)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e, t, n = "") {
		let r = this.rules.inline.delLDelim.exec(e);
		if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = this.rules.inline.delRDelim;
			for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = s.exec(t)) !== null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
				if (r[3] || r[4]) {
					o += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o);
				let t = [...r[0]][0].length, s = e.slice(0, n + r.index + t + a), c = s.slice(n, -n);
				return {
					type: "del",
					raw: s,
					text: c,
					tokens: this.lexer.inlineTokens(c)
				};
			}
		}
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === "@") e = t[0], n = "mailto:" + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: t[0],
				escaped: e
			};
		}
	}
}, Z = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || pt, this.options.tokenizer = this.options.tokenizer || new Fn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: W,
			block: Cn.normal,
			inline: wn.normal
		};
		this.options.pedantic ? (t.block = Cn.pedantic, t.inline = wn.pedantic) : this.options.gfm && (t.block = Cn.gfm, t.inline = this.options.breaks ? wn.breaks : wn.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: Cn,
			inline: wn
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(W.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(W.tabCharGlobal, "    ").replace(W.spaceLine, ""));
		let r = Infinity;
		for (; e;) {
			if (e.length < r) r = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			let i;
			if (this.options.extensions?.block?.some((n) => (i = n.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1)) continue;
			if (i = this.tokenizer.space(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				i.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(i);
				continue;
			}
			if (i = this.tokenizer.code(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.text, this.inlineQueue.at(-1).src = n.text) : t.push(i);
				continue;
			}
			if (i = this.tokenizer.fences(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.heading(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.hr(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.blockquote(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.list(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.html(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.def(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
					href: i.href,
					title: i.title
				}, t.push(i));
				continue;
			}
			if (i = this.tokenizer.table(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.lheading(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			let a = e;
			if (this.options.extensions?.startBlock) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (a = e.substring(0, t + 1));
			}
			if (this.state.top && (i = this.tokenizer.paragraph(a))) {
				let r = t.at(-1);
				n && r?.type === "paragraph" ? (r.raw += (r.raw.endsWith("\n") ? "" : "\n") + i.raw, r.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : t.push(i), n = a.length !== e.length, e = e.substring(i.raw.length);
				continue;
			}
			if (i = this.tokenizer.text(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(i);
				continue;
			}
			if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	inlineTokens(e, t = []) {
		this.tokenizer.lexer = this;
		let n = e;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			e.length > 0 && (n = n.replace(this.tokenizer.rules.inline.reflinkSearch, (t) => e.includes(t.slice(t.lastIndexOf("[") + 1, -1)) ? "[" + "a".repeat(t.length - 2) + "]" : t));
		}
		n = n.replace(this.tokenizer.rules.inline.anyPunctuation, "++"), n = n.replace(this.tokenizer.rules.inline.blockSkip, (e, t, n) => {
			let r = n ? n.length : 0;
			return e.slice(0, r) + "[" + "a".repeat(e.length - r - 2) + "]";
		}), n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let r = !1, i = "", a = Infinity;
		for (; e;) {
			if (e.length < a) a = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			r || (i = ""), r = !1;
			let o;
			if (this.options.extensions?.inline?.some((n) => (o = n.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1)) continue;
			if (o = this.tokenizer.escape(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.tag(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.link(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(o.raw.length);
				let n = t.at(-1);
				o.type === "text" && n?.type === "text" ? (n.raw += o.raw, n.text += o.text) : t.push(o);
				continue;
			}
			if (o = this.tokenizer.emStrong(e, n, i)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.codespan(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.br(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.del(e, n, i)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.autolink(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (!this.state.inLink && (o = this.tokenizer.url(e))) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			let s = e;
			if (this.options.extensions?.startInline) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (s = e.substring(0, t + 1));
			}
			if (o = this.tokenizer.inlineText(s)) {
				e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (i = o.raw.slice(-1)), r = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += o.raw, n.text += o.text) : t.push(o);
				continue;
			}
			if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return t;
	}
	infiniteLoopError(e) {
		let t = "Infinite loop on byte: " + e;
		if (this.options.silent) console.error(t);
		else throw Error(t);
	}
}, In = class {
	options;
	parser;
	constructor(e) {
		this.options = e || pt;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(W.notSpaceStart)?.[0], i = e.replace(W.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + X(r) + "\">" + (n ? i : X(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : X(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let t = e.ordered, n = e.start, r = "";
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + i + a + ">\n" + r + "</" + i + ">\n";
	}
	listitem(e) {
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = "";
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = "";
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${X(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = Dn(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + X(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = Dn(e);
		if (i === null) return X(n);
		e = i;
		let a = `<img src="${e}" alt="${X(n)}"`;
		return t && (a += ` title="${X(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : X(e.text);
	}
}, Ln = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
	checkbox({ raw: e }) {
		return e;
	}
}, Q = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || pt, this.options.renderer = this.options.renderer || new In(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ln();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"checkbox",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					t += n || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "space":
					t += this.renderer.space(i);
					break;
				case "hr":
					t += this.renderer.hr(i);
					break;
				case "heading":
					t += this.renderer.heading(i);
					break;
				case "code":
					t += this.renderer.code(i);
					break;
				case "table":
					t += this.renderer.table(i);
					break;
				case "blockquote":
					t += this.renderer.blockquote(i);
					break;
				case "list":
					t += this.renderer.list(i);
					break;
				case "checkbox":
					t += this.renderer.checkbox(i);
					break;
				case "html":
					t += this.renderer.html(i);
					break;
				case "def":
					t += this.renderer.def(i);
					break;
				case "paragraph":
					t += this.renderer.paragraph(i);
					break;
				case "text":
					t += this.renderer.text(i);
					break;
				default: {
					let e = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"checkbox",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(i.type)) {
					n += e || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "escape":
					n += t.text(a);
					break;
				case "html":
					n += t.html(a);
					break;
				case "link":
					n += t.link(a);
					break;
				case "image":
					n += t.image(a);
					break;
				case "checkbox":
					n += t.checkbox(a);
					break;
				case "strong":
					n += t.strong(a);
					break;
				case "em":
					n += t.em(a);
					break;
				case "codespan":
					n += t.codespan(a);
					break;
				case "br":
					n += t.br(a);
					break;
				case "del":
					n += t.del(a);
					break;
				case "text":
					n += t.text(a);
					break;
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
}, Rn = class {
	options;
	block;
	constructor(e) {
		this.options = e || pt;
	}
	static passThroughHooks = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer(e = this.block) {
		return e ? Z.lex : Z.lexInline;
	}
	provideParser(e = this.block) {
		return e ? Q.parse : Q.parseInline;
	}
}, zn = new class {
	defaults = H();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = Q;
	Renderer = In;
	TextRenderer = Ln;
	Lexer = Z;
	Tokenizer = Fn;
	Hooks = Rn;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				n = n.concat(this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(Infinity);
					n = n.concat(this.walkTokens(i, t));
				}) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new In(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if (["options", "parser"].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n || "";
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new Fn(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new Rn();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = Rn.passThroughHooks.has(n) ? (e) => {
						if (this.defaults.async && Rn.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : (...e) => {
						if (this.defaults.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return Z.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return Q.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer(e) : e ? Z.lex : Z.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? Q.parse : Q.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer(e) : e ? Z.lex : Z.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser(e) : e ? Q.parse : Q.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + X(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function $(e, t) {
	return zn.parse(e, t);
}
$.options = $.setOptions = function(e) {
	return zn.setOptions(e), $.defaults = zn.defaults, mt($.defaults), $;
}, $.getDefaults = H, $.defaults = pt;
function Bn(...e) {
	return zn.use(...e), $.defaults = zn.defaults, mt($.defaults), $;
}
$.use = Bn, $.walkTokens = function(e, t) {
	return zn.walkTokens(e, t);
}, $.parseInline = zn.parseInline, $.Parser = Q, $.parser = Q.parse, $.Renderer = In, $.TextRenderer = Ln, $.Lexer = Z, $.lexer = Z.lex, $.Tokenizer = Fn, $.Hooks = Rn, $.parse = $, $.options, $.setOptions, $.walkTokens, $.parseInline, Q.parse, Z.lex;
//#endregion
//#region resources/js/composables/useAiChat.ts
function Vn(e, t) {
	let r = _(null), i = _([]), a = _([]), o = _(!1), s = _(!1), c = _(!1), l = _(null), u = n(() => r.value !== null);
	function d() {
		r.value = null, i.value = [], a.value = [], o.value = !1, s.value = !1, c.value = !1, l.value = null;
	}
	function f() {
		r.value = null, i.value = [], l.value = null;
	}
	async function p() {
		o.value = !0;
		try {
			let { data: t } = await e.get("/ai/conversations");
			a.value = t.conversations;
		} catch {} finally {
			o.value = !1;
		}
	}
	async function m(n) {
		s.value = !0, l.value = null;
		try {
			let { data: t } = await e.get(`/ai/conversations/${n}`);
			r.value = t.conversation.id, i.value = t.messages;
		} catch (e) {
			let n = Hn(e, "Unable to load this conversation.");
			l.value = n, t("error", n);
		} finally {
			s.value = !1;
		}
	}
	async function h(t) {
		let n = t.trim();
		if (!n || c.value) return;
		l.value = null, c.value = !0;
		let a = {
			id: -Date.now(),
			role: "user",
			content: n,
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		i.value.push(a);
		try {
			let { data: t } = await e.post("/ai/chat", {
				conversation_id: r.value,
				message: n
			});
			r.value = t.conversation.id, i.value = i.value.map((e) => e.id === a.id ? {
				...a,
				id: a.id
			} : e), i.value.push(t.message), p();
		} catch (e) {
			i.value = i.value.filter((e) => e.id !== a.id), l.value = Hn(e, "The assistant could not respond. Please try again.");
		} finally {
			c.value = !1;
		}
	}
	async function g(n, r) {
		let i = r.trim();
		if (i) try {
			await e.patch(`/ai/conversations/${n}`, { title: i });
			let t = a.value.find((e) => e.id === n);
			t && (t.title = i);
		} catch (e) {
			t("error", Hn(e, "Unable to rename this conversation."));
		}
	}
	async function v(n) {
		try {
			await e.delete(`/ai/conversations/${n}`), a.value = a.value.filter((e) => e.id !== n), r.value === n && f();
		} catch (e) {
			t("error", Hn(e, "Unable to delete this conversation."));
		}
	}
	return {
		currentConversationId: r,
		messages: i,
		conversations: a,
		isLoadingConversations: o,
		isLoadingConversation: s,
		isSending: c,
		lastError: l,
		hasActiveConversation: u,
		reset: d,
		newConversation: f,
		refreshConversations: p,
		loadConversation: m,
		sendMessage: h,
		renameConversation: g,
		deleteConversation: v
	};
}
function Hn(e, t) {
	if (typeof e == "object" && e && "response" in e) {
		let t = e.response;
		if (typeof t?.data?.message == "string") return t.data.message;
	}
	return e instanceof Error && e.message ? e.message : t;
}
//#endregion
//#region resources/js/components/AiChatOverlay.vue?vue&type=script&setup=true&lang.ts
var Un = {
	key: 1,
	class: "fixed inset-y-0 right-0 z-50 flex w-full bg-surface shadow-2xl sm:w-[480px] lg:w-[640px]",
	"aria-label": "AI Assistant"
}, Wn = { class: "hidden w-52 shrink-0 border-r border-line-default bg-surface-secondary sm:flex sm:flex-col" }, Gn = { class: "flex-1 overflow-y-auto p-2" }, Kn = {
	key: 0,
	class: "p-2 text-xs text-muted"
}, qn = {
	key: 1,
	class: "p-2 text-xs text-muted"
}, Jn = {
	key: 2,
	class: "space-y-1"
}, Yn = ["onClick"], Xn = { class: "hidden shrink-0 group-hover:flex" }, Zn = ["onClick"], Qn = ["onClick"], $n = { class: "flex min-w-0 flex-1 flex-col" }, er = { class: "flex h-14 items-center justify-between border-b border-line-default px-3" }, tr = { class: "flex items-center gap-2" }, nr = { class: "flex items-center gap-1" }, rr = {
	key: 0,
	class: "border-b border-line-default bg-surface-secondary p-2 sm:hidden"
}, ir = { class: "max-h-48 overflow-y-auto" }, ar = ["onClick"], or = {
	key: 0,
	class: "p-2 text-xs text-muted"
}, sr = {
	key: 0,
	class: "py-12 text-center text-sm text-muted"
}, cr = {
	key: 1,
	class: "mx-auto mt-16 max-w-xs text-center text-sm text-muted"
}, lr = {
	key: 0,
	class: "max-w-[85%] whitespace-pre-wrap break-words rounded-lg bg-primary-500 px-4 py-2 text-sm text-white"
}, ur = ["innerHTML"], dr = {
	key: 2,
	class: "inline-flex rounded-lg bg-surface-tertiary px-4 py-2 text-sm italic text-muted"
}, fr = {
	key: 3,
	class: "rounded bg-alert-error-bg p-3 text-xs text-alert-error-text"
}, pr = ["disabled"], mr = ["disabled"], hr = /* @__PURE__ */ l({
	__name: "AiChatOverlay",
	props: /*@__PURE__*/ d({
		client: { type: [Function, Object] },
		enabled: { type: Boolean },
		notify: { type: Function }
	}, {
		open: {
			type: Boolean,
			default: !1
		},
		openModifiers: {}
	}),
	emits: ["update:open"],
	setup(n) {
		let s = n, l = S(n, "open"), u = Vn(s.client, s.notify), d = _(""), m = _(null), g = _(!1), C = _(null), w = _("");
		te(l, (e) => {
			e && s.enabled && u.refreshConversations();
		}), te(() => s.enabled, (e) => {
			e || (l.value = !1, u.reset());
		}), te(() => u.messages.value.length, async () => {
			await f(), m.value && (m.value.scrollTop = m.value.scrollHeight);
		});
		function ee() {
			l.value = !1, g.value = !1;
		}
		async function E(e) {
			await u.loadConversation(e.id), g.value = !1;
		}
		async function D() {
			let e = d.value;
			d.value = "", await u.sendMessage(e);
		}
		function ae(e, t) {
			t.stopPropagation(), C.value = e.id, w.value = e.title ?? "";
		}
		async function oe() {
			C.value !== null && await u.renameConversation(C.value, w.value), C.value = null, w.value = "";
		}
		async function se(e, t) {
			t.stopPropagation(), window.confirm(`Delete “${e.title ?? "Untitled conversation"}”?`) && await u.deleteConversation(e.id);
		}
		function O() {
			u.newConversation(), g.value = !1;
		}
		function k(e) {
			e.key === "Enter" && !e.shiftKey && (e.preventDefault(), D());
		}
		function ce(e) {
			return ft.sanitize($.parse(e ?? "", { async: !1 }));
		}
		return (s, f) => {
			let _ = y("BaseIcon");
			return h(), r(t, { to: "body" }, [l.value ? (h(), a("button", {
				key: 0,
				type: "button",
				class: "fixed inset-0 z-40 cursor-default bg-black/20",
				"aria-label": "Close AI Assistant",
				onClick: ee
			})) : i("", !0), l.value ? (h(), a("aside", Un, [o("section", Wn, [o("div", { class: "border-b border-line-default p-3" }, [o("button", {
				type: "button",
				class: "w-full rounded-md bg-btn-primary px-3 py-2 text-xs font-medium text-white hover:bg-btn-primary-hover",
				onClick: O
			}, " + New conversation ")]), o("div", Gn, [x(u).isLoadingConversations.value && !x(u).conversations.value.length ? (h(), a("p", Kn, "Loading history…")) : x(u).conversations.value.length ? (h(), a("ul", Jn, [(h(!0), a(e, null, v(x(u).conversations.value, (e) => (h(), a("li", { key: e.id }, [C.value === e.id ? (h(), a("form", {
				key: 0,
				class: "flex gap-1 p-1",
				onSubmit: ie(oe, ["prevent"])
			}, [ne(o("input", {
				"onUpdate:modelValue": f[0] ||= (e) => w.value = e,
				class: "min-w-0 flex-1 rounded border border-line-default bg-surface px-2 py-1 text-xs text-body",
				"aria-label": "Conversation title",
				autofocus: "",
				onKeydown: f[1] ||= re((e) => C.value = null, ["esc"])
			}, null, 544), [[T, w.value]]), f[4] ||= o("button", {
				type: "submit",
				class: "rounded px-1 text-xs text-primary-500 hover:bg-hover",
				"aria-label": "Save conversation title"
			}, "Save", -1)], 32)) : (h(), a("div", {
				key: 1,
				class: p(["group flex items-center gap-1 rounded text-sm hover:bg-hover", x(u).currentConversationId.value === e.id ? "bg-hover-strong font-semibold text-heading" : "text-body"])
			}, [o("button", {
				type: "button",
				class: "min-w-0 flex-1 truncate px-2 py-2 text-left",
				onClick: (t) => E(e)
			}, b(e.title || "Untitled conversation"), 9, Yn), o("span", Xn, [o("button", {
				type: "button",
				class: "px-1 text-muted hover:text-heading",
				"aria-label": "Rename conversation",
				onClick: (t) => ae(e, t)
			}, "✎", 8, Zn), o("button", {
				type: "button",
				class: "px-1 text-muted hover:text-alert-error-text",
				"aria-label": "Delete conversation",
				onClick: (t) => se(e, t)
			}, "×", 8, Qn)])], 2))]))), 128))])) : (h(), a("p", qn, "No conversations yet."))])]), o("section", $n, [
				o("header", er, [o("div", tr, [
					o("button", {
						type: "button",
						class: "rounded p-1 text-muted hover:bg-hover hover:text-heading sm:hidden",
						"aria-label": "Conversation history",
						onClick: f[2] ||= (e) => g.value = !g.value
					}, [c(_, {
						name: "Bars3Icon",
						class: "h-5 w-5"
					})]),
					c(_, {
						name: "SparklesIcon",
						class: "h-5 w-5 text-primary-500"
					}),
					f[5] ||= o("h2", { class: "text-sm font-semibold text-heading" }, "AI Assistant", -1)
				]), o("div", nr, [o("button", {
					type: "button",
					class: "rounded p-2 text-muted hover:bg-hover hover:text-heading",
					"aria-label": "New conversation",
					title: "New conversation",
					onClick: O
				}, [c(_, {
					name: "PlusIcon",
					class: "h-4 w-4"
				})]), o("button", {
					type: "button",
					class: "rounded p-2 text-muted hover:bg-hover hover:text-heading",
					"aria-label": "Close AI Assistant",
					onClick: ee
				}, [c(_, {
					name: "XMarkIcon",
					class: "h-5 w-5"
				})])])]),
				g.value ? (h(), a("div", rr, [o("button", {
					type: "button",
					class: "mb-2 w-full rounded-md bg-btn-primary px-3 py-2 text-xs font-medium text-white",
					onClick: O
				}, "+ New conversation"), o("div", ir, [(h(!0), a(e, null, v(x(u).conversations.value, (e) => (h(), a("button", {
					key: e.id,
					type: "button",
					class: "block w-full truncate rounded px-2 py-2 text-left text-sm text-body hover:bg-hover",
					onClick: (t) => E(e)
				}, b(e.title || "Untitled conversation"), 9, ar))), 128)), x(u).conversations.value.length ? i("", !0) : (h(), a("p", or, "No conversations yet."))])])) : i("", !0),
				o("main", {
					ref_key: "messagesEl",
					ref: m,
					class: "flex-1 space-y-3 overflow-y-auto p-4",
					"aria-live": "polite"
				}, [
					x(u).isLoadingConversation.value ? (h(), a("div", sr, "Loading conversation…")) : x(u).messages.value.length ? i("", !0) : (h(), a("div", cr, [c(_, {
						name: "SparklesIcon",
						class: "mx-auto mb-3 h-10 w-10 text-subtle"
					}), f[6] ||= o("p", null, "Ask for help with invoices, customers, or your business.", -1)])),
					(h(!0), a(e, null, v(x(u).messages.value, (e) => (h(), a("article", {
						key: e.id,
						class: p(["flex", e.role === "user" ? "justify-end" : "justify-start"])
					}, [e.role === "user" ? (h(), a("p", lr, b(e.content), 1)) : (h(), a("div", {
						key: 1,
						class: "max-w-[85%] break-words rounded-lg bg-surface-tertiary px-4 py-2 text-sm text-body [&_a]:text-primary-500 [&_a]:underline [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_p+p]:mt-3 [&_pre]:mt-3 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-surface [&_pre]:p-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5",
						innerHTML: ce(e.content)
					}, null, 8, ur))], 2))), 128)),
					x(u).isSending.value ? (h(), a("div", dr, "Thinking…")) : i("", !0),
					x(u).lastError.value ? (h(), a("p", fr, b(x(u).lastError.value), 1)) : i("", !0)
				], 512),
				o("form", {
					class: "flex items-end gap-2 border-t border-line-default p-3",
					onSubmit: ie(D, ["prevent"])
				}, [ne(o("textarea", {
					"onUpdate:modelValue": f[3] ||= (e) => d.value = e,
					rows: "2",
					class: "min-h-11 flex-1 resize-none rounded-md border border-line-default bg-surface px-3 py-2 text-sm text-body outline-none focus:ring-1 focus:ring-primary-500",
					placeholder: "Ask about your business…",
					disabled: !n.enabled || x(u).isSending.value,
					onKeydown: k
				}, null, 40, pr), [[T, d.value]]), o("button", {
					type: "submit",
					class: "rounded-md bg-btn-primary px-3 py-2 text-sm font-medium text-white hover:bg-btn-primary-hover disabled:cursor-not-allowed disabled:opacity-50",
					disabled: !n.enabled || x(u).isSending.value || !d.value.trim()
				}, b(x(u).isSending.value ? "Sending…" : "Send"), 9, mr)], 32)
			])])) : i("", !0)]);
		};
	}
}), gr = /* @__PURE__ */ l({
	__name: "AiHeaderAction",
	emits: ["open"],
	setup(e) {
		return (e, t) => {
			let n = y("BaseIcon");
			return h(), a("li", null, [o("button", {
				type: "button",
				class: "inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-body hover:bg-hover",
				title: "AI Assistant",
				"aria-label": "Open AI Assistant",
				onClick: t[0] ||= (t) => e.$emit("open")
			}, [c(n, {
				name: "SparklesIcon",
				class: "h-5 w-5 text-primary-500"
			}), t[1] ||= o("span", { class: "hidden lg:inline" }, "AI", -1)])]);
		};
	}
}), _r = ["disabled"], vr = {
	class: "w-full max-w-xl overflow-hidden rounded-lg bg-surface shadow-2xl",
	role: "dialog",
	"aria-modal": "true",
	"aria-labelledby": "ai-generate-title"
}, yr = { class: "flex items-center justify-between border-b border-line-default px-5 py-4" }, br = { class: "flex items-center gap-2" }, xr = ["disabled"], Sr = ["disabled"], Cr = {
	key: 0,
	class: "flex cursor-pointer items-start gap-2 text-sm text-body"
}, wr = {
	key: 1,
	class: "rounded bg-alert-error-bg p-3 text-sm text-alert-error-text"
}, Tr = {
	key: 2,
	class: "rounded-md border border-line-default bg-surface-secondary p-3"
}, Er = { class: "max-h-48 overflow-y-auto whitespace-pre-wrap break-words text-sm text-body" }, Dr = { class: "flex flex-wrap justify-end gap-2 border-t border-line-default p-4" }, Or = ["disabled"], kr = ["disabled"], Ar = ["disabled"], jr = ["disabled"], Mr = ["disabled"], Nr = /* @__PURE__ */ l({
	__name: "AiTextAction",
	props: {
		client: { type: [Function, Object] },
		context: {},
		enabled: { type: Boolean },
		notify: { type: Function }
	},
	setup(l) {
		let u = l, d = _(!1), f = _(""), p = _(!1), m = _(""), g = _(!1), v = _(""), x = n(() => m.value.trim().length > 0);
		te(d, (e) => {
			e || (f.value = "", p.value = !1, m.value = "", v.value = "");
		});
		async function S() {
			if (!(!f.value.trim() || g.value)) {
				g.value = !0, v.value = "", m.value = "";
				try {
					let { data: e } = await u.client.post("/ai/generate", {
						prompt: f.value.trim(),
						context: p.value ? u.context.getHtml() : void 0
					});
					e.text ? m.value = e.text : v.value = e.message ?? e.error ?? "The assistant could not generate text.";
				} catch (e) {
					v.value = Hn(e, "The assistant could not generate text.");
				} finally {
					g.value = !1;
				}
			}
		}
		function w() {
			u.context.insertContent(m.value), u.notify("success", "AI text inserted."), d.value = !1;
		}
		function ee() {
			u.context.replaceContent(m.value), u.notify("success", "Editor content replaced with AI text."), d.value = !1;
		}
		return (n, u) => {
			let _ = y("BaseIcon");
			return h(), a(e, null, [o("button", {
				type: "button",
				class: "inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-body hover:bg-hover disabled:cursor-not-allowed disabled:opacity-50",
				disabled: !l.enabled,
				title: "Generate with AI",
				onClick: u[0] ||= (e) => d.value = !0
			}, [c(_, {
				name: "SparklesIcon",
				class: "h-4 w-4 text-primary-500"
			}), u[6] ||= s(" AI write ", -1)], 8, _r), (h(), r(t, { to: "body" }, [d.value ? (h(), a("div", {
				key: 0,
				class: "fixed inset-0 z-50 grid place-items-center bg-black/30 p-4",
				role: "presentation",
				onMousedown: u[5] ||= ie((e) => d.value = !1, ["self"])
			}, [o("section", vr, [
				o("header", yr, [o("div", br, [c(_, {
					name: "SparklesIcon",
					class: "h-5 w-5 text-primary-500"
				}), u[7] ||= o("h2", {
					id: "ai-generate-title",
					class: "font-semibold text-heading"
				}, "Generate text", -1)]), o("button", {
					type: "button",
					class: "rounded p-1 text-muted hover:bg-hover hover:text-heading",
					"aria-label": "Close",
					disabled: g.value,
					onClick: u[1] ||= (e) => d.value = !1
				}, [c(_, {
					name: "XMarkIcon",
					class: "h-5 w-5"
				})], 8, xr)]),
				o("form", {
					class: "space-y-4 p-5",
					onSubmit: ie(S, ["prevent"])
				}, [
					u[11] ||= o("label", {
						class: "block text-sm font-medium text-heading",
						for: "ai-prompt"
					}, "What would you like to write?", -1),
					ne(o("textarea", {
						id: "ai-prompt",
						"onUpdate:modelValue": u[2] ||= (e) => f.value = e,
						rows: "3",
						class: "w-full rounded-md border border-line-default bg-surface px-3 py-2 text-sm text-body outline-none focus:ring-1 focus:ring-primary-500",
						placeholder: "For example: Write a polite payment reminder",
						disabled: g.value,
						autofocus: ""
					}, null, 8, Sr), [[T, f.value]]),
					l.context.getHtml() ? (h(), a("label", Cr, [
						ne(o("input", {
							"onUpdate:modelValue": u[3] ||= (e) => p.value = e,
							type: "checkbox",
							class: "mt-1"
						}, null, 512), [[C, p.value]]),
						u[8] ||= s(),
						u[9] ||= o("span", null, [
							s("Use the current editor content as context"),
							o("br"),
							o("span", { class: "text-xs text-muted" }, "The content helps the assistant match the document’s tone and details.")
						], -1)
					])) : i("", !0),
					v.value ? (h(), a("p", wr, b(v.value), 1)) : i("", !0),
					m.value ? (h(), a("section", Tr, [u[10] ||= o("p", { class: "mb-2 text-xs font-medium text-muted" }, "Preview", -1), o("p", Er, b(m.value), 1)])) : i("", !0)
				], 32),
				o("footer", Dr, [
					o("button", {
						type: "button",
						class: "rounded px-3 py-2 text-sm text-body hover:bg-hover",
						disabled: g.value,
						onClick: u[4] ||= (e) => d.value = !1
					}, "Cancel", 8, Or),
					x.value ? (h(), a("button", {
						key: 0,
						type: "button",
						class: "rounded border border-line-default px-3 py-2 text-sm text-body hover:bg-hover",
						disabled: g.value,
						onClick: ee
					}, "Replace", 8, kr)) : i("", !0),
					x.value ? (h(), a("button", {
						key: 1,
						type: "button",
						class: "rounded border border-line-default px-3 py-2 text-sm text-body hover:bg-hover",
						disabled: g.value,
						onClick: S
					}, "Regenerate", 8, Ar)) : i("", !0),
					x.value ? (h(), a("button", {
						key: 2,
						type: "button",
						class: "rounded bg-btn-primary px-3 py-2 text-sm font-medium text-white hover:bg-btn-primary-hover",
						disabled: g.value,
						onClick: w
					}, "Insert", 8, jr)) : (h(), a("button", {
						key: 3,
						type: "button",
						class: "rounded bg-btn-primary px-3 py-2 text-sm font-medium text-white hover:bg-btn-primary-hover disabled:cursor-not-allowed disabled:opacity-50",
						disabled: g.value || !f.value.trim(),
						onClick: S
					}, b(g.value ? "Generating…" : "Generate"), 9, Mr))
				])
			])], 32)) : i("", !0)]))], 64);
		};
	}
}), Pr = {
	key: 0,
	class: "p-6 text-sm text-muted"
}, Fr = {
	key: 1,
	class: "space-y-3 p-6"
}, Ir = { class: "rounded bg-alert-error-bg p-3 text-sm text-alert-error-text" }, Lr = {
	key: 0,
	class: "border-b border-line-default pb-6"
}, Rr = { class: "flex cursor-pointer items-start gap-3" }, zr = ["checked", "disabled"], Br = {
	key: 0,
	class: "mt-4 rounded bg-alert-success-bg p-3 text-sm text-alert-success-text"
}, Vr = {
	key: 1,
	class: "space-y-6"
}, Hr = { class: "flex cursor-pointer items-start gap-3" }, Ur = ["checked"], Wr = {
	key: 0,
	class: "space-y-5"
}, Gr = { class: "block text-sm font-medium text-heading" }, Kr = ["value"], qr = {
	key: 0,
	class: "-mt-3 text-xs text-muted"
}, Jr = ["href"], Yr = { class: "block text-sm font-medium text-heading" }, Xr = { class: "mt-1 flex gap-2" }, Zr = ["type", "placeholder"], Qr = [
	"value",
	"placeholder",
	"onInput"
], $r = ["value", "onChange"], ei = ["value"], ti = { class: "border-t border-line-default pt-5" }, ni = { class: "mt-5 space-y-5" }, ri = { class: "flex cursor-pointer gap-3" }, ii = ["checked"], ai = {
	key: 0,
	class: "mt-3 block text-sm text-body"
}, oi = { class: "flex cursor-pointer gap-3" }, si = ["checked"], ci = {
	key: 0,
	class: "mt-3 block text-sm text-body"
}, li = { id: "ai-models" }, ui = ["value"], di = {
	key: 2,
	class: "flex flex-wrap items-center gap-3 border-t border-line-default pt-5"
}, fi = ["disabled"], pi = ["disabled"], mi = /* @__PURE__ */ l({
	__name: "AiConfigurationPage",
	props: {
		client: { type: [Function, Object] },
		scope: {},
		notify: { type: Function }
	},
	setup(t) {
		let l = t, u = {
			ai_enabled: "NO",
			ai_driver: "openrouter",
			ai_api_key: "",
			ai_base_url: "",
			ai_chat_enabled: "NO",
			ai_chat_model: "anthropic/claude-sonnet-4.6",
			ai_text_generation_enabled: "NO",
			ai_text_generation_model: "anthropic/claude-haiku-4.5"
		}, d = g({
			...u,
			use_custom_ai_config: "NO"
		}), f = _([]), p = _(!0), x = _(!1), S = _(!1), C = _(!1), re = _(""), D = n(() => l.scope === "admin" ? "/ai/config" : "/company/ai/config"), ae = n(() => l.scope === "admin" ? "/ai/test" : "/company/ai/test"), oe = n(() => d.use_custom_ai_config === "YES"), se = n(() => d.ai_enabled === "YES"), O = n(() => f.value.find((e) => e.value === d.ai_driver)), k = n(() => O.value?.suggested_models ?? []), ce = n(() => O.value?.config_fields ?? []), le = n(() => /[•*]/.test(d.ai_api_key)), ue = n(() => l.scope === "admin" || oe.value);
		te(() => d.ai_driver, (e) => {
			let t = f.value.find((t) => t.value === e);
			t?.default_base_url && !d.ai_base_url && (d.ai_base_url = t.default_base_url);
		}), m(() => {
			de();
		});
		async function de() {
			p.value = !0, re.value = "";
			try {
				let [{ data: e }, { data: t }] = await Promise.all([l.client.get("/ai/drivers"), l.client.get(D.value)]);
				f.value = e.ai_drivers, Object.assign(d, u, t);
			} catch (e) {
				re.value = Hn(e, "Unable to load AI configuration."), l.notify("error", re.value);
			} finally {
				p.value = !1;
			}
		}
		function fe() {
			return { ...d };
		}
		function A() {
			if (!se.value) return null;
			if (!d.ai_driver) return "Choose an AI provider.";
			if (!d.ai_api_key && !le.value) return "Enter an API key.";
			if (d.ai_base_url) try {
				new URL(d.ai_base_url);
			} catch {
				return "Enter a valid base URL.";
			}
			return d.ai_chat_enabled === "YES" && !d.ai_chat_model.trim() ? "Choose a chat model." : d.ai_text_generation_enabled === "YES" && !d.ai_text_generation_model.trim() ? "Choose a text generation model." : null;
		}
		async function j() {
			let e = A();
			if (e) {
				l.notify("error", e);
				return;
			}
			x.value = !0;
			try {
				await l.client.post(D.value, fe()), l.notify("success", "AI settings saved.");
			} catch (e) {
				l.notify("error", Hn(e, "Unable to save AI settings."));
			} finally {
				x.value = !1;
			}
		}
		async function pe(e) {
			let t = e.target.checked;
			if (d.use_custom_ai_config = t ? "YES" : "NO", !t) {
				x.value = !0;
				try {
					await l.client.post(D.value, { use_custom_ai_config: "NO" }), l.notify("success", "This company now uses the global AI configuration.");
				} catch (e) {
					d.use_custom_ai_config = "YES", l.notify("error", Hn(e, "Unable to update the company configuration."));
				} finally {
					x.value = !1;
				}
			}
		}
		async function me() {
			if (se.value) {
				S.value = !0;
				try {
					let { data: e } = await l.client.post(ae.value, {
						ai_driver: d.ai_driver,
						ai_api_key: le.value ? void 0 : d.ai_api_key,
						ai_base_url: d.ai_base_url
					});
					e.success ? l.notify("success", e.message ?? "Connection successful.") : l.notify("error", e.message ?? e.error ?? "The connection test failed.");
				} catch (e) {
					l.notify("error", Hn(e, "The connection test failed."));
				} finally {
					S.value = !1;
				}
			}
		}
		function he(e, t) {
			d[e] = t.target.checked ? "YES" : "NO";
		}
		function ge(e, t) {
			d[`ai_${e}`] = t.target.value;
		}
		return (n, l) => {
			let u = y("BasePageHeader"), m = y("BaseCard"), g = y("BasePage");
			return h(), r(g, null, {
				default: E(() => [c(u, { title: t.scope === "admin" ? "AI Assistant" : "AI Assistant configuration" }, null, 8, ["title"]), c(m, { class: "max-w-3xl" }, {
					default: E(() => [p.value ? (h(), a("div", Pr, "Loading AI configuration…")) : re.value ? (h(), a("div", Fr, [o("p", Ir, b(re.value), 1), o("button", {
						type: "button",
						class: "rounded bg-btn-primary px-3 py-2 text-sm text-white",
						onClick: de
					}, "Try again")])) : (h(), a("form", {
						key: 2,
						class: "space-y-6 p-6",
						onSubmit: ie(j, ["prevent"])
					}, [
						t.scope === "company" ? (h(), a("section", Lr, [o("label", Rr, [o("input", {
							type: "checkbox",
							checked: oe.value,
							disabled: x.value,
							onChange: pe
						}, null, 40, zr), l[8] ||= o("span", null, [o("span", { class: "block text-sm font-medium text-heading" }, "Use a company-specific AI configuration"), o("span", { class: "mt-1 block text-xs text-muted" }, "Override the global provider and models for this company.")], -1)]), oe.value ? i("", !0) : (h(), a("p", Br, "This company is using the global AI configuration."))])) : i("", !0),
						ue.value ? (h(), a("div", Vr, [o("section", null, [o("label", Hr, [o("input", {
							type: "checkbox",
							checked: se.value,
							onChange: l[0] ||= (e) => he("ai_enabled", e)
						}, null, 40, Ur), l[9] ||= o("span", null, [o("span", { class: "block text-sm font-medium text-heading" }, "Enable AI Assistant"), o("span", { class: "mt-1 block text-xs text-muted" }, "Allow this provider to power chat and editor text generation.")], -1)])]), se.value ? (h(), a("div", Wr, [
							o("label", Gr, [l[10] ||= s("Provider ", -1), ne(o("select", {
								"onUpdate:modelValue": l[1] ||= (e) => d.ai_driver = e,
								class: "mt-1 w-full rounded-md border border-line-default bg-surface px-3 py-2 text-body"
							}, [(h(!0), a(e, null, v(f.value, (e) => (h(), a("option", {
								key: e.value,
								value: e.value
							}, b(e.label), 9, Kr))), 128))], 512), [[ee, d.ai_driver]])]),
							O.value?.website ? (h(), a("p", qr, [
								l[11] ||= s("Get an API key from ", -1),
								o("a", {
									class: "text-primary-500 underline",
									href: O.value.website,
									target: "_blank",
									rel: "noopener noreferrer"
								}, b(O.value.label), 9, Jr),
								l[12] ||= s(".", -1)
							])) : i("", !0),
							o("label", Yr, [
								l[13] ||= s("API key ", -1),
								o("span", Xr, [ne(o("input", {
									"onUpdate:modelValue": l[2] ||= (e) => d.ai_api_key = e,
									type: C.value ? "text" : "password",
									autocomplete: "new-password",
									class: "min-w-0 flex-1 rounded-md border border-line-default bg-surface px-3 py-2 text-body",
									placeholder: le.value ? "Stored securely — enter a new key to replace it" : ""
								}, null, 8, Zr), [[w, d.ai_api_key]]), o("button", {
									type: "button",
									class: "rounded border border-line-default px-3 text-xs text-body hover:bg-hover",
									onClick: l[3] ||= (e) => C.value = !C.value
								}, b(C.value ? "Hide" : "Show"), 1)]),
								l[14] ||= o("span", { class: "mt-1 block text-xs font-normal text-muted" }, "Keys are stored securely. Leave the masked value unchanged to keep the current key.", -1)
							]),
							(h(!0), a(e, null, v(ce.value, (t) => (h(), a("label", {
								key: t.key,
								class: "block text-sm font-medium text-heading"
							}, [s(b(t.label) + " ", 1), t.type === "text" ? (h(), a("input", {
								key: 0,
								value: d[`ai_${t.key}`] ?? "",
								placeholder: t.default,
								class: "mt-1 w-full rounded-md border border-line-default bg-surface px-3 py-2 text-body",
								onInput: (e) => ge(t.key, e)
							}, null, 40, Qr)) : (h(), a("select", {
								key: 1,
								value: d[`ai_${t.key}`] ?? "",
								class: "mt-1 w-full rounded-md border border-line-default bg-surface px-3 py-2 text-body",
								onChange: (e) => ge(t.key, e)
							}, [(h(!0), a(e, null, v(t.options, (e) => (h(), a("option", {
								key: e.value,
								value: e.value
							}, b(e.label), 9, ei))), 128))], 40, $r))]))), 128)),
							o("section", ti, [
								l[19] ||= o("h2", { class: "text-sm font-semibold text-heading" }, "AI capabilities", -1),
								l[20] ||= o("p", { class: "mt-1 text-xs text-muted" }, "Enable only the AI tools your team needs, and choose a model for each one.", -1),
								o("div", ni, [o("div", null, [o("label", ri, [o("input", {
									type: "checkbox",
									checked: d.ai_chat_enabled === "YES",
									onChange: l[4] ||= (e) => he("ai_chat_enabled", e)
								}, null, 40, ii), l[15] ||= o("span", { class: "text-sm font-medium text-heading" }, [s("Assistant chat"), o("span", { class: "mt-1 block text-xs font-normal text-muted" }, "Show the conversational AI drawer in company pages.")], -1)]), d.ai_chat_enabled === "YES" ? (h(), a("label", ai, [l[16] ||= s("Chat model", -1), ne(o("input", {
									"onUpdate:modelValue": l[5] ||= (e) => d.ai_chat_model = e,
									list: "ai-models",
									class: "mt-1 w-full rounded-md border border-line-default bg-surface px-3 py-2"
								}, null, 512), [[T, d.ai_chat_model]])])) : i("", !0)]), o("div", null, [o("label", oi, [o("input", {
									type: "checkbox",
									checked: d.ai_text_generation_enabled === "YES",
									onChange: l[6] ||= (e) => he("ai_text_generation_enabled", e)
								}, null, 40, si), l[17] ||= o("span", { class: "text-sm font-medium text-heading" }, [s("Editor text generation"), o("span", { class: "mt-1 block text-xs font-normal text-muted" }, "Add AI writing tools to rich-text editors.")], -1)]), d.ai_text_generation_enabled === "YES" ? (h(), a("label", ci, [l[18] ||= s("Text generation model", -1), ne(o("input", {
									"onUpdate:modelValue": l[7] ||= (e) => d.ai_text_generation_model = e,
									list: "ai-models",
									class: "mt-1 w-full rounded-md border border-line-default bg-surface px-3 py-2"
								}, null, 512), [[T, d.ai_text_generation_model]])])) : i("", !0)])]),
								o("datalist", li, [(h(!0), a(e, null, v(k.value, (e) => (h(), a("option", {
									key: e.value,
									value: e.value
								}, b(e.label), 9, ui))), 128))])
							])
						])) : i("", !0)])) : i("", !0),
						ue.value ? (h(), a("footer", di, [o("button", {
							type: "submit",
							class: "rounded bg-btn-primary px-4 py-2 text-sm font-medium text-white hover:bg-btn-primary-hover disabled:opacity-50",
							disabled: x.value
						}, b(x.value ? "Saving…" : "Save settings"), 9, fi), se.value ? (h(), a("button", {
							key: 0,
							type: "button",
							class: "rounded border border-line-default px-4 py-2 text-sm text-body hover:bg-hover disabled:opacity-50",
							disabled: x.value || S.value,
							onClick: me
						}, b(S.value ? "Testing…" : "Test connection"), 9, pi)) : i("", !0)])) : i("", !0)
					], 32))]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region resources/js/init.ts
window.InvoiceShelf.booting((e, t, n) => {
	let r = _(!1), i = _(!1), a = _(!1), o = _(!1), s = _(!1), c = _(0), d = (e, t) => {
		n.notify(e, t);
	}, f = async (e = !1) => {
		try {
			let t = e ? "/ai/admin-capabilities" : "/ai/capabilities", { data: s } = await n.client.get(t);
			r.value = !!s.chat, i.value = !!s.text_generation, a.value = !!s.can_manage_company, o.value = !!s.can_manage_global;
		} catch {
			r.value = !1, i.value = !1, a.value = !1, o.value = !1;
		}
	};
	n.addMessages({ en: { ai_assistant: {
		title: "AI Assistant",
		chat: {
			new_conversation: "New conversation",
			empty: "No conversations yet.",
			thinking: "Thinking…"
		},
		settings: {
			saved: "AI settings saved.",
			connection_success: "Connection successful."
		}
	} } }), n.on("bootstrap:completed", ({ adminMode: e }) => {
		f(e);
	}), n.on("company:changing", () => {
		s.value = !1, c.value += 1, r.value = !1, i.value = !1;
	}), n.on("company:changed", ({ companyId: e }) => {
		f(e === null);
	}), n.registerHeaderAction({
		id: "ai-assistant.header",
		priority: 20,
		visible: () => r.value,
		component: l({ setup: () => () => u(gr, { onOpen: () => {
			s.value = !0;
		} }) })
	}), n.registerCompanyLayoutOverlay({
		id: "ai-assistant.overlay",
		component: l({ setup: () => () => u(hr, {
			key: c.value,
			open: s.value,
			enabled: r.value,
			client: n.client,
			notify: d,
			"onUpdate:open": (e) => {
				s.value = e;
			}
		}) })
	}), n.registerRichEditorToolbarAction({
		id: "ai-assistant.editor",
		visible: () => i.value,
		component: l({
			props: { context: {
				type: Object,
				required: !0
			} },
			setup: (e) => () => u(Nr, {
				context: e.context,
				enabled: i.value,
				client: n.client,
				notify: d
			})
		})
	}), hi(n, "admin", o, d), hi(n, "company", a, d);
});
function hi(e, t, n, r) {
	let i = {
		id: `ai-assistant.${t}-settings`,
		title: "AI Assistant",
		icon: "SparklesIcon",
		path: "ai-assistant",
		priority: 80,
		visible: () => n.value,
		component: l({ setup: () => () => u(mi, {
			client: e.client,
			scope: t,
			notify: r
		}) })
	};
	t === "admin" ? e.registerAdminSettingsPage(i) : e.registerCompanySettingsPage(i);
}
//#endregion
