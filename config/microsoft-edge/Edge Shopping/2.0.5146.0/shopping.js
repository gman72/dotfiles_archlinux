/*! For license information please see shopping.js.LICENSE.txt */
  :host {
    background-color: ${Vl};
    color: ${Lc};
  }
`.withBehaviors(Gm(cm`
      :host {
        background-color: ${Km.Canvas};
        box-shadow: 0 0 0 1px ${Km.CanvasText};
        color: ${Km.CanvasText};
      }
    `));function $m(e){return(t,n)=>{t[n+"Changed"]=function(t,n){null!=n?e.setValueFor(this,n):e.deleteValueFor(this)}}}class Ym extends Xg{constructor(){super(),this.noPaint=!1;const e={handleChange:this.noPaintChanged.bind(this)};ir.getNotifier(this).subscribe(e,"fillColor"),ir.getNotifier(this).subscribe(e,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){this.noPaint||void 0===this.fillColor&&!this.baseLayerLuminance?this.$fastController.removeStyles(jm):this.$fastController.addStyles(jm)}}am([br({attribute:"no-paint",mode:"boolean"})],Ym.prototype,"noPaint",void 0),am([br({attribute:"fill-color",converter:zm,mode:"fromView"}),$m(Vl)],Ym.prototype,"fillColor",void 0),am([br({attribute:"accent-base-color",converter:zm,mode:"fromView"}),$m(wl)],Ym.prototype,"accentBaseColor",void 0),am([br({attribute:"neutral-base-color",converter:zm,mode:"fromView"}),$m(Dl)],Ym.prototype,"neutralBaseColor",void 0),am([br({converter:yr}),$m(Xa)],Ym.prototype,"density",void 0),am([br({attribute:"design-unit",converter:yr}),$m(qa)],Ym.prototype,"designUnit",void 0),am([br({attribute:"direction"}),$m(za)],Ym.prototype,"direction",void 0),am([br({attribute:"base-height-multiplier",converter:yr}),$m($a)],Ym.prototype,"baseHeightMultiplier",void 0),am([br({attribute:"base-horizontal-spacing-multiplier",converter:yr}),$m(Ya)],Ym.prototype,"baseHorizontalSpacingMultiplier",void 0),am([br({attribute:"control-corner-radius",converter:yr}),$m(Za)],Ym.prototype,"controlCornerRadius",void 0),am([br({attribute:"layer-corner-radius",converter:yr}),$m(Ja)],Ym.prototype,"layerCornerRadius",void 0),am([br({attribute:"stroke-width",converter:yr}),$m(Qa)],Ym.prototype,"strokeWidth",void 0),am([br({attribute:"focus-stroke-width",converter:yr}),$m(es)],Ym.prototype,"focusStrokeWidth",void 0),am([br({attribute:"disabled-opacity",converter:yr}),$m(ja)],Ym.prototype,"disabledOpacity",void 0),am([br({attribute:"type-ramp-minus-2-font-size"}),$m(us)],Ym.prototype,"typeRampMinus2FontSize",void 0),am([br({attribute:"type-ramp-minus-2-line-height"}),$m(ds)],Ym.prototype,"typeRampMinus2LineHeight",void 0),am([br({attribute:"type-ramp-minus-1-font-size"}),$m(ss)],Ym.prototype,"typeRampMinus1FontSize",void 0),am([br({attribute:"type-ramp-minus-1-line-height"}),$m(ls)],Ym.prototype,"typeRampMinus1LineHeight",void 0),am([br({attribute:"type-ramp-base-font-size"}),$m(os)],Ym.prototype,"typeRampBaseFontSize",void 0),am([br({attribute:"type-ramp-base-line-height"}),$m(rs)],Ym.prototype,"typeRampBaseLineHeight",void 0),am([br({attribute:"type-ramp-plus-1-font-size"}),$m(hs)],Ym.prototype,"typeRampPlus1FontSize",void 0),am([br({attribute:"type-ramp-plus-1-line-height"}),$m(fs)],Ym.prototype,"typeRampPlus1LineHeight",void 0),am([br({attribute:"type-ramp-plus-2-font-size"}),$m(ms)],Ym.prototype,"typeRampPlus2FontSize",void 0),am([br({attribute:"type-ramp-plus-2-line-height"}),$m(vs)],Ym.prototype,"typeRampPlus2LineHeight",void 0),am([br({attribute:"type-ramp-plus-3-font-size"}),$m(ys)],Ym.prototype,"typeRampPlus3FontSize",void 0),am([br({attribute:"type-ramp-plus-3-line-height"}),$m(Ss)],Ym.prototype,"typeRampPlus3LineHeight",void 0),am([br({attribute:"type-ramp-plus-4-font-size"}),$m(Ts)],Ym.prototype,"typeRampPlus4FontSize",void 0),am([br({attribute:"type-ramp-plus-4-line-height"}),$m(xs)],Ym.prototype,"typeRampPlus4LineHeight",void 0),am([br({attribute:"type-ramp-plus-5-font-size"}),$m(As)],Ym.prototype,"typeRampPlus5FontSize",void 0),am([br({attribute:"type-ramp-plus-5-line-height"}),$m(ks)],Ym.prototype,"typeRampPlus5LineHeight",void 0),am([br({attribute:"type-ramp-plus-6-font-size"}),$m(Os)],Ym.prototype,"typeRampPlus6FontSize",void 0),am([br({attribute:"type-ramp-plus-6-line-height"}),$m(Ds)],Ym.prototype,"typeRampPlus6LineHeight",void 0),am([br({attribute:"accent-fill-rest-delta",converter:yr}),$m(Rs)],Ym.prototype,"accentFillRestDelta",void 0),am([br({attribute:"accent-fill-hover-delta",converter:yr}),$m(Ns)],Ym.prototype,"accentFillHoverDelta",void 0),am([br({attribute:"accent-fill-active-delta",converter:yr}),$m(_s)],Ym.prototype,"accentFillActiveDelta",void 0),am([br({attribute:"accent-fill-focus-delta",converter:yr}),$m(Ms)],Ym.prototype,"accentFillFocusDelta",void 0),am([br({attribute:"accent-foreground-rest-delta",converter:yr}),$m(Ls)],Ym.prototype,"accentForegroundRestDelta",void 0),am([br({attribute:"accent-foreground-hover-delta",converter:yr}),$m(Fs)],Ym.prototype,"accentForegroundHoverDelta",void 0),am([br({attribute:"accent-foreground-active-delta",converter:yr}),$m(Hs)],Ym.prototype,"accentForegroundActiveDelta",void 0),am([br({attribute:"accent-foreground-focus-delta",converter:yr}),$m(Us)],Ym.prototype,"accentForegroundFocusDelta",void 0),am([br({attribute:"neutral-fill-rest-delta",converter:yr}),$m(Bs)],Ym.prototype,"neutralFillRestDelta",void 0),am([br({attribute:"neutral-fill-hover-delta",converter:yr}),$m(Gs)],Ym.prototype,"neutralFillHoverDelta",void 0),am([br({attribute:"neutral-fill-active-delta",converter:yr}),$m(Vs)],Ym.prototype,"neutralFillActiveDelta",void 0),am([br({attribute:"neutral-fill-focus-delta",converter:yr}),$m(Ws)],Ym.prototype,"neutralFillFocusDelta",void 0),am([br({attribute:"neutral-fill-input-rest-delta",converter:yr}),$m(Ks)],Ym.prototype,"neutralFillInputRestDelta",void 0),am([br({attribute:"neutral-fill-input-hover-delta",converter:yr}),$m(zs)],Ym.prototype,"neutralFillInputHoverDelta",void 0),am([br({attribute:"neutral-fill-input-active-delta",converter:yr}),$m(js)],Ym.prototype,"neutralFillInputActiveDelta",void 0),am([br({attribute:"neutral-fill-input-focus-delta",converter:yr}),$m($s)],Ym.prototype,"neutralFillInputFocusDelta",void 0),am([br({attribute:"neutral-fill-layer-rest-delta",converter:yr}),$m(Js)],Ym.prototype,"neutralFillLayerRestDelta",void 0),am([br({attribute:"neutral-fill-stealth-rest-delta",converter:yr}),$m(al)],Ym.prototype,"neutralFillStealthRestDelta",void 0),am([br({attribute:"neutral-fill-stealth-hover-delta",converter:yr}),$m(sl)],Ym.prototype,"neutralFillStealthHoverDelta",void 0),am([br({attribute:"neutral-fill-stealth-active-delta",converter:yr}),$m(ll)],Ym.prototype,"neutralFillStealthActiveDelta",void 0),am([br({attribute:"neutral-fill-stealth-focus-delta",converter:yr}),$m(cl)],Ym.prototype,"neutralFillStealthFocusDelta",void 0),am([br({attribute:"neutral-fill-strong-hover-delta",converter:yr}),$m(dl)],Ym.prototype,"neutralFillStrongHoverDelta",void 0),am([br({attribute:"neutral-fill-strong-active-delta",converter:yr}),$m(pl)],Ym.prototype,"neutralFillStrongActiveDelta",void 0),am([br({attribute:"neutral-fill-strong-focus-delta",converter:yr}),$m(hl)],Ym.prototype,"neutralFillStrongFocusDelta",void 0),am([br({attribute:"base-layer-luminance",converter:yr}),$m(ws)],Ym.prototype,"baseLayerLuminance",void 0),am([br({attribute:"neutral-stroke-divider-rest-delta",converter:yr}),$m(Tl)],Ym.prototype,"neutralStrokeDividerRestDelta",void 0),am([br({attribute:"neutral-stroke-rest-delta",converter:yr}),$m(fl)],Ym.prototype,"neutralStrokeRestDelta",void 0),am([br({attribute:"neutral-stroke-hover-delta",converter:yr}),$m(gl)],Ym.prototype,"neutralStrokeHoverDelta",void 0),am([br({attribute:"neutral-stroke-active-delta",converter:yr}),$m(ml)],Ym.prototype,"neutralStrokeActiveDelta",void 0),am([br({attribute:"neutral-stroke-focus-delta",converter:yr}),$m(vl)],Ym.prototype,"neutralStrokeFocusDelta",void 0);const Xm=Ym.compose({baseName:"design-system-provider",template:Hm` <slot></slot> `,styles:cm`
    ${Wm("block")}
  `});var qm;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(qm||(qm={}));const Zm="ArrowDown",Jm="ArrowLeft",Qm="ArrowRight",ev="ArrowUp",tv="Enter",nv="Escape",iv="Home",ov="End",rv=" ",av="Tab",sv={ArrowDown:Zm,ArrowLeft:Jm,ArrowRight:Qm,ArrowUp:ev};function lv(e,t,n){return n<e?t:n>t?e:n}function cv(e,t,n=0){return[t,n]=[t,n].sort(((e,t)=>e-t)),t<=e&&e<n}class uv{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function dv(e){return new fm("fast-ref",uv,e)}class pv{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const hv=(e,t)=>Hm`
    <span
        part="end"
        ${dv("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${dv("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,fv=(e,t)=>Hm`
    <span
        part="start"
        ${dv("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${dv("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;Hm`
    <span part="end" ${dv("endContainer")}>
        <slot
            name="end"
            ${dv("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Hm`
    <span part="start" ${dv("startContainer")}>
        <slot
            name="start"
            ${dv("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function gv(e,...t){const n=vr.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}));vr.locate(t).forEach((e=>n.push(e)))}))}class mv extends Xg{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}Qo([br({attribute:"heading-level",mode:"fromView",converter:yr})],mv.prototype,"headinglevel",void 0),Qo([br({mode:"boolean"})],mv.prototype,"expanded",void 0),Qo([br],mv.prototype,"id",void 0),gv(mv,pv);const vv="single",Cv="multi";class yv extends Xg{constructor(){super(...arguments),this.expandmode=Cv,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var e;if(0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((e,t)=>{e instanceof mv&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==t?e.expanded=!1:e.expanded=!0));const n=this.accordionIds[t];e.setAttribute("id","string"!=typeof n?`accordion-${t+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)})),this.isSingleExpandMode())){(null!==(e=this.findExpandedItem())&&void 0!==e?e:this.accordionItems[0]).setAttribute("aria-disabled","true")}},this.removeItemListeners=e=>{e.forEach(((e,t)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=e=>{if(e.defaultPrevented||e.target!==e.currentTarget)return;e.preventDefault();const t=e.target;this.activeid=t.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),t.expanded=!0,t.setAttribute("aria-disabled","true"),this.accordionItems.forEach((e=>{e.hasAttribute("disabled")||e.id===this.activeid||e.removeAttribute("aria-disabled")}))),this.activeItemIndex=Array.from(this.accordionItems).indexOf(t),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case ev:e.preventDefault(),this.adjust(-1);break;case Zm:e.preventDefault(),this.adjust(1);break;case iv:this.activeItemIndex=0,this.focusItem();break;case ov:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const t=e.target,n=this.activeItemIndex=Array.from(this.accordionItems).indexOf(t);this.activeItemIndex!==n&&-1!==n&&(this.activeItemIndex=n,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,t){this.$fastController.isConnected&&(this.removeItemListeners(e),this.setItems())}findExpandedItem(){for(let e=0;e<this.accordionItems.length;e++)if("true"===this.accordionItems[e].getAttribute("expanded"))return this.accordionItems[e];return null}resetItems(){this.accordionItems.forEach(((e,t)=>{e.expanded=!1}))}getItemIds(){return this.accordionItems.map((e=>e.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===vv}adjust(e){this.activeItemIndex=lv(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof mv&&e.expandbutton.focus()}}function Sv(e){return e?function(t,n,i){return 1===t.nodeType&&t.matches(e)}:function(e,t,n){return 1===e.nodeType}}Qo([br({attribute:"expand-mode"})],yv.prototype,"expandmode",void 0),Qo([or],yv.prototype,"accordionItems",void 0);class bv{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=ir.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Ri),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Tv extends bv{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function xv(e){return"string"==typeof e&&(e={property:e}),new fm("fast-slotted",Tv,e)}const Ev=dm`
  font-family: ${ts};
  font-size: ${os};
  line-height: ${rs};
  font-weight: initial;
  font-variation-settings: ${as};
`,Av=(dm`
  font-family: ${ts};
  font-size: ${ss};
  line-height: ${ls};
  font-weight: initial;
  font-variation-settings: ${cs};
`,dm`
  font-family: ${ts};
  font-size: ${us};
  line-height: ${ds};
  font-weight: initial;
  font-variation-settings: ${ps};
`,dm`
  font-family: ${ts};
  font-size: ${hs};
  line-height: ${fs};
  font-weight: initial;
  font-variation-settings: ${gs};
`,dm`
  font-family: ${ts};
  font-size: ${ms};
  line-height: ${vs};
  font-weight: initial;
  font-variation-settings: ${Cs};
`,dm`
  font-family: ${ts};
  font-size: ${ys};
  line-height: ${Ss};
  font-weight: initial;
  font-variation-settings: ${bs};
`,dm`
  font-family: ${ts};
  font-size: ${Ts};
  line-height: ${xs};
  font-weight: initial;
  font-variation-settings: ${Es};
`,dm`
  font-family: ${ts};
  font-size: ${As};
  line-height: ${ks};
  font-weight: initial;
  font-variation-settings: ${Is};
`,dm`
  font-family: ${ts};
  font-size: ${Os};
  line-height: ${Ds};
  font-weight: initial;
  font-variation-settings: ${Ps};
`,yv.compose({baseName:"accordion",template:(e,t)=>Hm`
    <template>
        <slot ${xv({property:"accordionItems",filter:Sv()})}></slot>
        <slot name="item" part="item" ${xv("accordionItems")}></slot>
    </template>
`,styles:(e,t)=>cm`
    ${Wm("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${Ev}
      color: ${Lc};
      gap: calc(${qa} * 1px);
    }
  `}));function kv(...e){return e.every((e=>e instanceof HTMLElement))}let Iv;const Ov=function(){if("boolean"==typeof Iv)return Iv;if("undefined"==typeof window||!window.document||!window.document.createElement)return Iv=!1,Iv;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Iv=!0}catch(e){Iv=!1}finally{document.head.removeChild(e)}return Iv}()?"focus-visible":"focus",Dv=dm`
  outline: calc(${es} * 1px) solid ${ru};
  outline-offset: calc(${es} * -1px);
`,Pv=dm`
  outline: calc(${es} * 1px) solid ${ru};
  outline-offset: calc(${Qa} * 1px);
`,wv=dm`(${$a} + ${Xa}) * ${qa}`,Rv=Xr.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault((e=>{const t=Sc.getValueFor(e);return Dc.getValueFor(e).evaluate(e,t.evaluate(e).rest).rest})),Nv=Xr.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault((e=>{const t=Sc.getValueFor(e);return Dc.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover})),_v=Xr.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault((e=>{const t=Sc.getValueFor(e);return Dc.getValueFor(e).evaluate(e,t.evaluate(e).rest).active})),Mv=mv.compose({baseName:"accordion-item",template:(e,t)=>Hm`
    <template class="${e=>e.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${e=>e.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${dv("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,t)=>e.clickHandler(t.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${fv(0,t)}
            ${hv(0,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${e=>e.id}-panel"
            role="region"
            aria-labelledby="${e=>e.id}"
        >
            <slot></slot>
        </div>
    </template>
`,styles:(e,t)=>cm`
    ${Wm("flex")} :host {
      box-sizing: border-box;
      ${Ev};
      flex-direction: column;
      background: ${bc};
      color: ${Lc};
      border: calc(${Qa} * 1px) solid ${Qc};
      border-radius: calc(${Ja} * 1px);
    }

    .region {
      display: none;
      padding: calc(${qa} * 2 * 1px);
      background: ${xc};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${qa} * 3 * 1px) 0;
      padding: 0 calc(${qa} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${Qa} * -1px);
      left: calc(${Qa} * -1px);
      right: calc(${Qa} * -1px);
      bottom: calc(${Qa} * -1px);
      cursor: pointer;
    }

    .button:${Ov}::before {
      ${Dv}
      border-radius: calc(${Ja} * 1px);
    }

    :host(.expanded) .button:${Ov}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${Qa} * 1px) solid ${Qc};
      border-bottom-left-radius: calc((${Ja} - ${Qa}) * 1px);
      border-bottom-right-radius: calc((${Ja} - ${Qa}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${Rv};
      border-radius: calc(${Za} * 1px);
      fill: currentcolor;
      width: calc(${wv} * 1px);
      height: calc(${wv} * 1px);
      margin: calc(${qa} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${Nv};
    }

    .heading:active .icon {
      background: ${_v};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${qa} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(Gm(cm`
        .button:${Ov}::before {
          outline-color: ${Km.Highlight};
        }
        .icon {
          fill: ${Km.ButtonText};
        }
      `)),collapsedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',expandedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n  '});class Lv{}Qo([br({attribute:"aria-atomic"})],Lv.prototype,"ariaAtomic",void 0),Qo([br({attribute:"aria-busy"})],Lv.prototype,"ariaBusy",void 0),Qo([br({attribute:"aria-controls"})],Lv.prototype,"ariaControls",void 0),Qo([br({attribute:"aria-current"})],Lv.prototype,"ariaCurrent",void 0),Qo([br({attribute:"aria-describedby"})],Lv.prototype,"ariaDescribedby",void 0),Qo([br({attribute:"aria-details"})],Lv.prototype,"ariaDetails",void 0),Qo([br({attribute:"aria-disabled"})],Lv.prototype,"ariaDisabled",void 0),Qo([br({attribute:"aria-errormessage"})],Lv.prototype,"ariaErrormessage",void 0),Qo([br({attribute:"aria-flowto"})],Lv.prototype,"ariaFlowto",void 0),Qo([br({attribute:"aria-haspopup"})],Lv.prototype,"ariaHaspopup",void 0),Qo([br({attribute:"aria-hidden"})],Lv.prototype,"ariaHidden",void 0),Qo([br({attribute:"aria-invalid"})],Lv.prototype,"ariaInvalid",void 0),Qo([br({attribute:"aria-keyshortcuts"})],Lv.prototype,"ariaKeyshortcuts",void 0),Qo([br({attribute:"aria-label"})],Lv.prototype,"ariaLabel",void 0),Qo([br({attribute:"aria-labelledby"})],Lv.prototype,"ariaLabelledby",void 0),Qo([br({attribute:"aria-live"})],Lv.prototype,"ariaLive",void 0),Qo([br({attribute:"aria-owns"})],Lv.prototype,"ariaOwns",void 0),Qo([br({attribute:"aria-relevant"})],Lv.prototype,"ariaRelevant",void 0),Qo([br({attribute:"aria-roledescription"})],Lv.prototype,"ariaRoledescription",void 0);class Fv extends Xg{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}Qo([br],Fv.prototype,"download",void 0),Qo([br],Fv.prototype,"href",void 0),Qo([br],Fv.prototype,"hreflang",void 0),Qo([br],Fv.prototype,"ping",void 0),Qo([br],Fv.prototype,"referrerpolicy",void 0),Qo([br],Fv.prototype,"rel",void 0),Qo([br],Fv.prototype,"target",void 0),Qo([br],Fv.prototype,"type",void 0),Qo([or],Fv.prototype,"defaultSlottedContent",void 0);class Hv{}Qo([br({attribute:"aria-expanded"})],Hv.prototype,"ariaExpanded",void 0),gv(Hv,Lv),gv(Fv,pv,Hv);const Uv=(e,t,n,i="[disabled]")=>cm`
    ${Wm("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Ev}
      height: calc(${wv} * 1px);
      min-width: calc(${wv} * 1px);
      color: ${Lc};
      border-radius: calc(${Za} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${Qa} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${qa} * 2 * ${Xa})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${Ov} {
      ${Dv}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,Bv=(e,t,n,i="[disabled]")=>cm`
    .control {
      background: padding-box linear-gradient(${lc}, ${lc}),
        border-box ${Kc};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${cc}, ${cc}),
        border-box ${zc};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${uc}, ${uc}),
        border-box ${jc};
    }

    :host(${i}) .control {
      background: padding-box linear-gradient(${lc}, ${lc}),
        border-box ${Bc};
    }
  `.withBehaviors(Gm(cm`
        .control {
          background: ${Km.ButtonFace};
          border-color: ${Km.ButtonText};
          color: ${Km.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          forced-color-adjust: none;
          background: ${Km.HighlightText};
          border-color: ${Km.Highlight};
          color: ${Km.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${Km.GrayText};
          color: ${Km.GrayText};
        }

        .control:${Ov} {
          outline-color: ${Km.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${Km.LinkText};
          color: ${Km.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${Km.CanvasText};
          color: ${Km.CanvasText};
        }
    `)),Gv=(e,t,n,i="[disabled]")=>cm`
    .control {
      background: padding-box linear-gradient(${zl}, ${zl}),
        border-box ${oc};
      color: ${ql};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${jl}, ${jl}),
        border-box ${rc};
      color: ${Zl};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${$l}, ${$l}),
        border-box ${ac};
      color: ${Jl};
    }

    :host(${i}) .control {
      background: ${zl};
    }

    .control:${Ov} {
      box-shadow: 0 0 0 calc(${es} * 1px) ${su} inset !important;
    }
  `.withBehaviors(Gm(cm`
        .control {
          forced-color-adjust: none;
          background: ${Km.Highlight};
          color: ${Km.HighlightText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${Km.HighlightText};
          border-color: ${Km.Highlight};
          color: ${Km.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${Km.GrayText};
          color: ${Km.GrayText};
        }

        .control:${Ov} {
          outline-color: ${Km.CanvasText};
          box-shadow: 0 0 0 calc(${es} * 1px) ${Km.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${Km.LinkText};
          color: ${Km.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${Km.ButtonFace};
          border-color: ${Km.LinkText};
          color: ${Km.LinkText};
        }
      `)),Vv=(e,t,n,i="[disabled]")=>cm`
    :host {
      color: ${ec};
    }

    .control {
      background: ${Pc};
    }

    :host(${n}:hover) .control {
      background: ${wc};
      color: ${tc};
    }

    :host(${n}:active) .control {
      background: ${Rc};
      color: ${nc};
    }

    :host(${i}) .control {
      background: ${Pc};
    }
  `.withBehaviors(Gm(cm`
        :host {
          color: ${Km.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${Km.ButtonText};
          color: ${Km.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${Km.GrayText};
        }

        .control:${Ov} {
          outline-color: ${Km.CanvasText};
        }

        :host([href]) .control {
          color: ${Km.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${Km.LinkText};
          color: ${Km.LinkText};
        }
      `)),Wv=(e,t,n,i="[disabled]")=>cm`
    .control {
      background: transparent !important;
      border-color: ${Bc};
    }

    :host(${n}:hover) .control {
      border-color: ${Gc};
    }

    :host(${n}:active) .control {
      border-color: ${Vc};
    }

    :host(${i}) .control {
      background: transparent !important;
      border-color: ${Bc};
    }
  `.withBehaviors(Gm(cm`
        .control {
          border-color: ${Km.ButtonText};
          color: ${Km.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${Km.HighlightText};
          border-color: ${Km.Highlight};
          color: ${Km.Highlight};
        }

        :host(${i}) .control {
          border-color: ${Km.GrayText};
          color: ${Km.GrayText};
        }

        .control:${Ov} {
          outline-color: ${Km.CanvasText};
        }

        :host([href]) .control {
          border-color: ${Km.LinkText};
          color: ${Km.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${Km.CanvasText};
          color: ${Km.CanvasText};
        }
      `)),Kv=(e,t,n,i="[disabled]")=>cm`
    .control {
      background: ${Pc};
    }

    :host(${n}:hover) .control {
      background: ${wc};
    }

    :host(${n}:active) .control {
      background: ${Rc};
    }

    :host(${i}) .control {
      background: ${Pc};
    }
  `.withBehaviors(Gm(cm`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${Km.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${Km.ButtonText};
          color: ${Km.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${Km.GrayText};
        }
        
        .control:${Ov} {
          outline-color: ${Km.CanvasText};
        }

        :host([href]) .control {
          color: ${Km.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${Km.LinkText};
          color: ${Km.LinkText};
        }
      `));class zv{constructor(e,t,n){this.propertyName=e,this.value=t,this.styles=n}bind(e){ir.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){ir.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function jv(e,t){return new zv("appearance",e,t)}const $v="[href]";class Yv extends Fv{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var e,t;const n=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===n.length&&n[0]instanceof SVGElement?null===(e=this.control)||void 0===e||e.classList.add("icon-only"):null===(t=this.control)||void 0===t||t.classList.remove("icon-only")}}am([br],Yv.prototype,"appearance",void 0);const Xv=Yv.compose({baseName:"anchor",baseClass:Fv,template:(e,t)=>Hm`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${dv("control")}
    >
        ${fv(0,t)}
        <span class="content" part="content">
            <slot ${xv("defaultSlottedContent")}></slot>
        </span>
        ${hv(0,t)}
    </a>
`,styles:(e,t)=>Uv().withBehaviors(jv("neutral",Bv(0,0,$v)),jv("accent",Gv(0,0,$v)),jv("hypertext",((e,t,n,i="[disabled]")=>cm`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${n}) .control {
      color: ${ec};
      text-decoration: underline 1px;
    }

    :host(${n}:hover) .control {
      color: ${tc};
      text-decoration: none;
    }

    :host(${n}:active) .control {
      color: ${nc};
      text-decoration: none;
    }

    .control:${Ov} {
      ${Pv}
    }
  `.withBehaviors(Gm(cm`
        :host(${n}) .control {
          color: ${Km.LinkText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          color: ${Km.CanvasText};
        }

        .control:${Ov} {
          outline-color: ${Km.CanvasText};
        }
      `)))(0,0,$v)),jv("lightweight",Vv(0,0,$v)),jv("outline",Wv(0,0,$v)),jv("stealth",Kv(0,0,$v))),shadowOptions:{delegatesFocus:!0}}),qv="form-associated-proxy",Zv="ElementInternals",Jv=Zv in window&&"setFormValue"in window[Zv].prototype,Qv=new WeakMap;function eC(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Jv}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return Ri}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),Bi.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),Bi.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Jv)return null;let e=Qv.get(this);return e||(e=this.attachInternals(),Qv.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",qv),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",qv)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===tv)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return br({mode:"boolean"})(t.prototype,"disabled"),br({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),br({attribute:"current-value"})(t.prototype,"currentValue"),br(t.prototype,"name"),br({mode:"boolean"})(t.prototype,"required"),or(t.prototype,"value"),t}function tC(e){class t extends(eC(e)){}class n extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return br({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),br({attribute:"current-checked",converter:Cr})(n.prototype,"currentChecked"),or(n.prototype,"defaultChecked"),or(n.prototype,"checked"),n}class nC extends Xg{}class iC extends(eC(nC)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class oC extends iC{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}Qo([br({mode:"boolean"})],oC.prototype,"autofocus",void 0),Qo([br({attribute:"form"})],oC.prototype,"formId",void 0),Qo([br],oC.prototype,"formaction",void 0),Qo([br],oC.prototype,"formenctype",void 0),Qo([br],oC.prototype,"formmethod",void 0),Qo([br({mode:"boolean"})],oC.prototype,"formnovalidate",void 0),Qo([br],oC.prototype,"formtarget",void 0),Qo([br],oC.prototype,"type",void 0),Qo([or],oC.prototype,"defaultSlottedContent",void 0);class rC{}Qo([br({attribute:"aria-expanded"})],rC.prototype,"ariaExpanded",void 0),Qo([br({attribute:"aria-pressed"})],rC.prototype,"ariaPressed",void 0),gv(rC,Lv),gv(oC,pv,rC);const aC="not-allowed",sC=":not([disabled])",lC="[disabled]";class cC extends oC{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}am([br],cC.prototype,"appearance",void 0);const uC=cC.compose({baseName:"button",baseClass:oC,template:(e,t)=>Hm`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${dv("control")}
    >
        ${fv(0,t)}
        <span class="content" part="content">
            <slot ${xv("defaultSlottedContent")}></slot>
        </span>
        ${hv(0,t)}
    </button>
`,styles:(e,t)=>cm`
    :host(${sC}) .control {
      cursor: pointer;
    }

    :host(${lC}) .control {
      cursor: ${aC};
    }

    @media (forced-colors: none) {
      :host(${lC}) .control {
        opacity: ${ja};
      }
    }

    ${Uv(0,0,0,lC)}
  `.withBehaviors(jv("neutral",Bv(0,0,sC,lC)),jv("accent",Gv(0,0,sC,lC)),jv("lightweight",Vv(0,0,sC,lC)),jv("outline",Wv(0,0,sC,lC)),jv("stealth",Kv(0,0,sC,lC))),shadowOptions:{delegatesFocus:!0}}),dC="menuitem",pC="menuitemcheckbox",hC="menuitemradio",fC={[dC]:"menuitem",[pC]:"menuitemcheckbox",[hC]:"menuitemradio"};var gC;!function(e){e.ltr="ltr",e.rtl="rtl"}(gC||(gC={}));const mC=e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?gC.rtl:gC.ltr};class vC extends Xg{constructor(){super(...arguments),this.role=dC,this.hasSubmenu=!1,this.currentDirection=gC.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case tv:case rv:return this.invoke(),!1;case Qm:return this.expandAndFocus(),!1;case Jm:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case pC:this.checked=!this.checked;break;case dC:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case hC:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find((e=>"menu"===e.getAttribute("role"))),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(e){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=mC(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,t){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),Bi.queueUpdate((()=>{this.updateSubmenu()})),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter((e=>!e.hasAttribute("hidden")))}}Qo([br({mode:"boolean"})],vC.prototype,"disabled",void 0),Qo([br({mode:"boolean"})],vC.prototype,"expanded",void 0),Qo([or],vC.prototype,"startColumnCount",void 0),Qo([br],vC.prototype,"role",void 0),Qo([br({mode:"boolean"})],vC.prototype,"checked",void 0),Qo([or],vC.prototype,"submenuRegion",void 0),Qo([or],vC.prototype,"hasSubmenu",void 0),Qo([or],vC.prototype,"currentDirection",void 0),Qo([or],vC.prototype,"submenu",void 0),gv(vC,pv);class CC extends Xg{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&kv(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=e=>{const t=e.target;void 0!==this.menuItems&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||null===e.target||void 0===this.menuItems||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const t=e.target;null===this.expandedItem||t!==this.expandedItem||!1!==t.expanded?t.expanded&&(null!==this.expandedItem&&this.expandedItem!==t&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=t,this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach((e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)}))},this.setItems=()=>{const e=this.domChildren();this.removeItemListeners(),this.menuItems=e;const t=this.menuItems.filter(this.isMenuItemElement);t.length&&(this.focusIndex=0);const n=t.reduce(((e,t)=>{const n=function(e){const t=e.getAttribute("role"),n=e.querySelector("[slot=start]");return t!==dC&&null===n||t===dC&&null!==n?1:t!==dC&&null!==n?2:0}(t);return e>n?e:n}),0);t.forEach(((e,t)=>{e.setAttribute("tabindex",0===t?"0":"-1"),e.addEventListener("expanded-change",this.handleExpandedChanged),e.addEventListener("focus",this.handleItemFocus),e instanceof vC&&(e.startColumnCount=n)}))},this.changeHandler=e=>{if(void 0===this.menuItems)return;const t=e.target,n=this.menuItems.indexOf(t);if(-1!==n&&"menuitemradio"===t.role&&!0===t.checked){for(let e=n-1;e>=0;--e){const t=this.menuItems[e],n=t.getAttribute("role");if(n===hC&&(t.checked=!1),"separator"===n)break}const e=this.menuItems.length-1;for(let t=n+1;t<=e;++t){const e=this.menuItems[t],n=e.getAttribute("role");if(n===hC&&(e.checked=!1),"separator"===n)break}}},this.isMenuItemElement=e=>kv(e)&&CC.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,t){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),Bi.queueUpdate((()=>{this.setItems()})),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!e.defaultPrevented&&void 0!==this.menuItems)switch(e.key){case Zm:return void this.setFocus(this.focusIndex+1,1);case ev:return void this.setFocus(this.focusIndex-1,-1);case ov:return void this.setFocus(this.menuItems.length-1,-1);case iv:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter((e=>!e.hasAttribute("hidden")))}setFocus(e,t){if(void 0!==this.menuItems)for(;e>=0&&e<this.menuItems.length;){const n=this.menuItems[e];if(this.isFocusableElement(n)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,n.setAttribute("tabindex","0"),n.focus();break}e+=t}}}CC.focusableElementRoles=fC,Qo([or],CC.prototype,"items",void 0);const yC="horizontal",SC="separator";class bC extends Xg{constructor(){super(...arguments),this.role=SC,this.orientation=yC}}Qo([br],bC.prototype,"role",void 0),Qo([br],bC.prototype,"orientation",void 0);const TC=Xr.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,n)=>{let i=.12,o=.14;t>16&&(i=.2,o=.24);return`${`0 0 2px rgba(0, 0, 0, ${i})`}, ${`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${o})`}`}}),xC=Xr.create("elevation-shadow-card-rest-size").withDefault(4),EC=Xr.create("elevation-shadow-card-hover-size").withDefault(8),AC=Xr.create("elevation-shadow-card-active-size").withDefault(0),kC=Xr.create("elevation-shadow-card-focus-size").withDefault(8),IC=(Xr.create("elevation-shadow-card-rest").withDefault((e=>TC.getValueFor(e).evaluate(e,xC.getValueFor(e)))),Xr.create("elevation-shadow-card-hover").withDefault((e=>TC.getValueFor(e).evaluate(e,EC.getValueFor(e)))),Xr.create("elevation-shadow-card-active").withDefault((e=>TC.getValueFor(e).evaluate(e,AC.getValueFor(e)))),Xr.create("elevation-shadow-card-focus").withDefault((e=>TC.getValueFor(e).evaluate(e,kC.getValueFor(e)))),Xr.create("elevation-shadow-tooltip-size").withDefault(16)),OC=Xr.create("elevation-shadow-tooltip").withDefault((e=>TC.getValueFor(e).evaluate(e,IC.getValueFor(e)))),DC=Xr.create("elevation-shadow-flyout-size").withDefault(32),PC=Xr.create("elevation-shadow-flyout").withDefault((e=>TC.getValueFor(e).evaluate(e,DC.getValueFor(e)))),wC=Xr.create("elevation-shadow-dialog-size").withDefault(128),RC=Xr.create("elevation-shadow-dialog").withDefault((e=>TC.getValueFor(e).evaluate(e,wC.getValueFor(e))));const NC=class extends CC{connectedCallback(){super.connectedCallback(),Vl.setValueFor(this,Ll)}}.compose({baseName:"menu",baseClass:CC,template:(e,t)=>Hm`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,t)=>e.handleMenuKeyDown(t.event)}"
        @focusout="${(e,t)=>e.handleFocusOut(t.event)}"
    >
        <slot ${xv("items")}></slot>
    </template>
`,styles:(e,t)=>cm`
    ${Wm("block")} :host {
      background: ${Ll};
      border: calc(${Qa} * 1px) solid transparent;
      border-radius: calc(${Ja} * 1px);
      box-shadow: ${PC};
      padding: calc((${qa} - ${Qa}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${qa} * 2px);
    }

    ::slotted(${e.tagFor(vC)}) {
      margin: 0 calc(${qa} * 1px);
    }

    ::slotted(${e.tagFor(bC)}) {
      margin: calc(${qa} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${qa} * 1px) 0;
      border: none;
      border-top: calc(${Qa} * 1px) solid ${Yc};
    }
  `.withBehaviors(Gm(cm`
        :host([slot='submenu']) {
          background: ${Km.Canvas};
          border-color: ${Km.CanvasText};
        }
      `))});function _C(e,t){const n="function"==typeof t?t:()=>t;return(t,i)=>e(t,i)?n(t,i):null}const MC="resize",LC="scroll";class FC extends Xg{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=gC.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(FC.intersectionService.requestPosition(this,this.handleIntersection),FC.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&FC.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,FC.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&FC.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&FC.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=e=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(e)&&this.updateLayout())},this.applyIntersectionEntries=e=>{const t=e.find((e=>e.target===this)),n=e.find((e=>e.target===this.anchorElement)),i=e.find((e=>e.target===this.viewportElement));return void 0!==t&&void 0!==i&&void 0!==n&&(!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,n.boundingClientRect)||this.isRectDifferent(this.viewportRect,i.boundingClientRect)||this.isRectDifferent(this.regionRect,t.boundingClientRect))&&(this.regionRect=t.boundingClientRect,this.anchorRect=n.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(i.boundingClientRect.x+document.documentElement.scrollLeft,i.boundingClientRect.y+document.documentElement.scrollTop,i.boundingClientRect.width,i.boundingClientRect.height):this.viewportRect=i.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0))},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(e,t)=>Math.abs(e.top-t.top)>this.updateThreshold||Math.abs(e.right-t.right)>this.updateThreshold||Math.abs(e.bottom-t.bottom)>this.updateThreshold||Math.abs(e.left-t.left)>this.updateThreshold,this.handleResize=e=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=mC(this),this.startObservers())},this.updateLayout=()=>{let e,t;if("uncontrolled"!==this.horizontalPositioningMode){const e=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)t="center";else if("unset"!==this.horizontalDefaultPosition){let e=this.horizontalDefaultPosition;if("start"===e||"end"===e){const t=mC(this);if(t!==this.currentDirection)return this.currentDirection=t,void this.initialize();e=this.currentDirection===gC.ltr?"start"===e?"left":"right":"start"===e?"right":"left"}switch(e){case"left":t=this.horizontalInset?"insetStart":"start";break;case"right":t=this.horizontalInset?"insetEnd":"end"}}const n=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,i=void 0!==this.anchorRect?this.anchorRect.left:0,o=void 0!==this.anchorRect?this.anchorRect.right:0,r=void 0!==this.anchorRect?this.anchorRect.width:0,a=void 0!==this.viewportRect?this.viewportRect.left:0,s=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===t||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(t,i,o,r,a,s)<n)&&(t=this.getAvailableSpace(e[0],i,o,r,a,s)>this.getAvailableSpace(e[1],i,o,r,a,s)?e[0]:e[1])}if("uncontrolled"!==this.verticalPositioningMode){const t=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)e="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":e=this.verticalInset?"insetStart":"start";break;case"bottom":e=this.verticalInset?"insetEnd":"end"}const n=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,i=void 0!==this.anchorRect?this.anchorRect.top:0,o=void 0!==this.anchorRect?this.anchorRect.bottom:0,r=void 0!==this.anchorRect?this.anchorRect.height:0,a=void 0!==this.viewportRect?this.viewportRect.top:0,s=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===e||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(e,i,o,r,a,s)<n)&&(e=this.getAvailableSpace(t[0],i,o,r,a,s)>this.getAvailableSpace(t[1],i,o,r,a,s)?t[0]:t[1])}const n=this.getNextRegionDimension(t,e),i=this.horizontalPosition!==t||this.verticalPosition!==e;if(this.setHorizontalPosition(t,n),this.setVerticalPosition(e,n),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),i&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(e,t)=>{if(void 0===e||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.horizontalScaling){case"anchor":case"fill":n=this.horizontalViewportLock?this.viewportRect.width:t.width,this.regionWidth=`${n}px`;break;case"content":n=this.regionRect.width,this.regionWidth="unset"}let i=0;switch(e){case"start":this.translateX=this.baseHorizontalOffset-n,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-n+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(i=(this.anchorRect.width-n)/2,this.translateX=this.baseHorizontalOffset+i,this.horizontalViewportLock){const e=this.anchorRect.left+i,t=this.anchorRect.right-i;e<this.viewportRect.left&&!(t>this.viewportRect.right)?this.translateX=this.translateX-(e-this.viewportRect.left):t>this.viewportRect.right&&!(e<this.viewportRect.left)&&(this.translateX=this.translateX-(t-this.viewportRect.right))}}this.horizontalPosition=e},this.setVerticalPosition=(e,t)=>{if(void 0===e||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.verticalScaling){case"anchor":case"fill":n=this.verticalViewportLock?this.viewportRect.height:t.height,this.regionHeight=`${n}px`;break;case"content":n=this.regionRect.height,this.regionHeight="unset"}let i=0;switch(e){case"start":this.translateY=this.baseVerticalOffset-n,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-n+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(i=(this.anchorRect.height-n)/2,this.translateY=this.baseVerticalOffset+i,this.verticalViewportLock){const e=this.anchorRect.top+i,t=this.anchorRect.bottom-i;e<this.viewportRect.top&&!(t>this.viewportRect.bottom)?this.translateY=this.translateY-(e-this.viewportRect.top):t>this.viewportRect.bottom&&!(e<this.viewportRect.top)&&(this.translateY=this.translateY-(t-this.viewportRect.bottom))}}this.verticalPosition=e},this.getPositioningOptions=e=>e?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(e,t,n,i,o,r)=>{const a=t-o,s=r-(t+i);switch(e){case"start":return a;case"insetStart":return a+i;case"insetEnd":return s+i;case"end":return s;case"center":return 2*Math.min(a,s)+i}},this.getNextRegionDimension=(e,t)=>{const n={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==e&&"fill"===this.horizontalScaling?n.width=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(n.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==t&&"fill"===this.verticalScaling?n.height=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(n.height=void 0!==this.anchorRect?this.anchorRect.height:0),n},this.startAutoUpdateEventListeners=()=>{window.addEventListener(MC,this.update,{passive:!0}),window.addEventListener(LC,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(MC,this.update),window.removeEventListener(LC,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(e,t){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===e&&this.stopAutoUpdateEventListeners(),"auto"===t&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),Bi.queueUpdate((()=>this.reset())),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}FC.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(e,t)=>{var n;null!==this.intersectionDetector&&(this.observedElements.has(e)?null===(n=this.observedElements.get(e))||void 0===n||n.push(t):(this.observedElements.set(e,[t]),this.intersectionDetector.observe(e)))},this.cancelRequestPosition=(e,t)=>{const n=this.observedElements.get(e);if(void 0!==n){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}},this.initializeIntersectionDetector=()=>{Di.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=e=>{if(null===this.intersectionDetector)return;const t=[],n=[];e.forEach((e=>{var i;null===(i=this.intersectionDetector)||void 0===i||i.unobserve(e.target);const o=this.observedElements.get(e.target);void 0!==o&&(o.forEach((i=>{let o=t.indexOf(i);-1===o&&(o=t.length,t.push(i),n.push([])),n[o].push(e)})),this.observedElements.delete(e.target))})),t.forEach(((e,t)=>{e(n[t])}))},this.initializeIntersectionDetector()}},Qo([br],FC.prototype,"anchor",void 0),Qo([br],FC.prototype,"viewport",void 0),Qo([br({attribute:"horizontal-positioning-mode"})],FC.prototype,"horizontalPositioningMode",void 0),Qo([br({attribute:"horizontal-default-position"})],FC.prototype,"horizontalDefaultPosition",void 0),Qo([br({attribute:"horizontal-viewport-lock",mode:"boolean"})],FC.prototype,"horizontalViewportLock",void 0),Qo([br({attribute:"horizontal-inset",mode:"boolean"})],FC.prototype,"horizontalInset",void 0),Qo([br({attribute:"horizontal-threshold"})],FC.prototype,"horizontalThreshold",void 0),Qo([br({attribute:"horizontal-scaling"})],FC.prototype,"horizontalScaling",void 0),Qo([br({attribute:"vertical-positioning-mode"})],FC.prototype,"verticalPositioningMode",void 0),Qo([br({attribute:"vertical-default-position"})],FC.prototype,"verticalDefaultPosition",void 0),Qo([br({attribute:"vertical-viewport-lock",mode:"boolean"})],FC.prototype,"verticalViewportLock",void 0),Qo([br({attribute:"vertical-inset",mode:"boolean"})],FC.prototype,"verticalInset",void 0),Qo([br({attribute:"vertical-threshold"})],FC.prototype,"verticalThreshold",void 0),Qo([br({attribute:"vertical-scaling"})],FC.prototype,"verticalScaling",void 0),Qo([br({attribute:"fixed-placement",mode:"boolean"})],FC.prototype,"fixedPlacement",void 0),Qo([br({attribute:"auto-update-mode"})],FC.prototype,"autoUpdateMode",void 0),Qo([or],FC.prototype,"anchorElement",void 0),Qo([or],FC.prototype,"viewportElement",void 0),Qo([or],FC.prototype,"initialLayoutComplete",void 0);class HC{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&za.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new UC(this.ltr,this.rtl,e),n=za.getValueFor(e);za.subscribe(t),t.attach(n),this.cache.set(e,t)}}class UC{constructor(e,t,n){this.ltr=e,this.rtl=t,this.source=n,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const BC=vC.compose({baseName:"menu-item",template:(e,t)=>Hm`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==dC?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
        @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
        @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
        @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${_C((e=>e.role===pC),Hm`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${_C((e=>e.role===hC),Hm`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${fv(0,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${hv(0,t)}
        ${_C((e=>e.hasSubmenu),Hm`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${_C((e=>e.expanded),Hm`
                <${e.tagFor(FC)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${dv("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${e.tagFor(FC)}>
            `)}
    </template>
`,styles:(e,t)=>cm`
    ${Wm("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Ev}
      box-sizing: border-box;
      height: calc(${wv} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Lc};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Za} * 1px);
      border: calc(${Qa} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${Ov}) {
      ${Dv}
    }

    :host(:not([disabled]):hover) {
      background: ${wc};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Rc};
      color: ${Lc};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${aC};
      opacity: ${ja};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${Hc};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(Gm(cm`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${Km.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${Km.Highlight};
          color: ${Km.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${Ov}) ::slotted([slot='end']:not(svg)) {
          color: ${Km.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${Km.Highlight};
          color: ${Km.HighlightText};
        }
        :host(:${Ov}) {
          background: ${Km.Highlight};
          outline-color: ${Km.ButtonText};
          color: ${Km.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${Ov}) {
          background: ${Km.ButtonFace};
          color: ${Km.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${Ov}) {
          outline-color: ${Km.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${Km.ButtonText};
          background: ${Km.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${Km.HighlightText};
          border-color: ${Km.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${Ov}) .expanded-toggle,
            :host(:${Ov}) .checkbox,
            :host(:${Ov}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${Ov}) .checkbox,
            :host([checked]:${Ov}) .radio {
          border-color: ${Km.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${Km.Highlight};
          color: ${Km.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${Km.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${Km.Highlight};
        }
      `),new HC(cm`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,cm`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '});class GC extends Xg{}Qo([br({mode:"boolean"})],GC.prototype,"disabled",void 0);const VC=GC.compose({baseName:"tab",template:(e,t)=>Hm`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>cm`
      ${Wm("inline-flex")} :host {
        box-sizing: border-box;
        ${Ev}
        height: calc((${wv} + (${qa} * 2)) * 1px);
        padding: 0 calc((6 + (${qa} * 2 * ${Xa})) * 1px);
        color: ${Lc};
        border-radius: calc(${Za} * 1px);
        border: calc(${Qa} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${Lc};
      }

      :host(:${Ov}) {
        ${Dv}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${Lc};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(Gm(cm`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${Km.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${Km.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${Km.Highlight};
            fill: currentcolor;
          }
          :host(:${Ov}) {
            background: transparent;
            outline-color: ${Km.ButtonText};
          }
        `))});const WC=class extends Xg{}.compose({baseName:"tab-panel",template:(e,t)=>Hm`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>cm`
  ${Wm("block")} :host {
    box-sizing: border-box;
    ${Ev}
    padding: 0 calc((6 + (${qa} * 2 * ${Xa})) * 1px);
  }
`});let KC=0;function zC(e=""){return`${e}${KC++}`}const jC="horizontal";class $C extends Xg{constructor(){super(...arguments),this.orientation=jC,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((i,o)=>{if("tab"===i.slot){const e=this.activeTabIndex===o&&this.isFocusableElement(i);this.activeindicator&&this.isFocusableElement(i)&&(this.showActiveIndicator=!0);const t=this.tabIds[o],n=this.tabpanelIds[o];i.setAttribute("id",t),i.setAttribute("aria-selected",e?"true":"false"),i.setAttribute("aria-controls",n),i.addEventListener("click",this.handleTabClick),i.addEventListener("keydown",this.handleTabKeyDown),i.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=i)}i.style[e]="",i.style[t]="",i.style[n]=`${o+1}`,this.isHorizontal()?i.classList.remove("vertical"):i.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const n=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id",i),e.setAttribute("aria-labelledby",n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Jm:e.preventDefault(),this.adjustBackward(e);break;case Qm:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case ev:e.preventDefault(),this.adjustBackward(e);break;case Zm:e.preventDefault(),this.adjustForward(e)}switch(e.key){case iv:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case ov:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}n-1<0?n=t.length-1:n-=1}},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${zC()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${zC()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===jC}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-i;this.activeIndicatorRef.style.transform=`${t}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=lv(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}Qo([br],$C.prototype,"orientation",void 0),Qo([br],$C.prototype,"activeid",void 0),Qo([or],$C.prototype,"tabs",void 0),Qo([or],$C.prototype,"tabpanels",void 0),Qo([br({mode:"boolean"})],$C.prototype,"activeindicator",void 0),Qo([or],$C.prototype,"activeIndicatorRef",void 0),Qo([or],$C.prototype,"showActiveIndicator",void 0),gv($C,pv);const YC=$C.compose({baseName:"tabs",template:(e,t)=>Hm`
    <template class="${e=>e.orientation}">
        ${fv(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${xv("tabs")}></slot>

            ${_C((e=>e.showActiveIndicator),Hm`
                    <div
                        ${dv("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${hv(0,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${xv("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>cm`
      ${Wm("grid")} :host {
        box-sizing: border-box;
        ${Ev}
        color: ${Lc};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${wv} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${Za} * 1px);
        justify-self: center;
        background: ${zl};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${es} * 1px);
        border-radius: calc(${Za} * 1px);
        align-self: center;
        background: ${zl};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(Gm(cm`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${Km.Highlight};
        }
      `))});class XC extends Xg{}class qC extends(tC(XC)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ZC extends qC{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case tv:case rv:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}Qo([br({attribute:"readonly",mode:"boolean"})],ZC.prototype,"readOnly",void 0),Qo([or],ZC.prototype,"defaultSlottedNodes",void 0);const JC=ZC.compose({baseName:"switch",template:(e,t)=>Hm`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${xv("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(e,t)=>cm`
    :host([hidden]) {
      display: none;
    }

    ${Wm("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${ts};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${ja};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${aC};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${wv} / 2) + ${qa}) * 2px);
      height: calc(((${wv} / 2) + ${qa}) * 1px);
      background: ${mc};
      border-radius: calc(${wv} * 1px);
      border: calc(${Qa} * 1px) solid ${tu};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${vc};
      border-color: ${nu};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Cc};
      border-color: ${iu};
    }

    :host(:${Ov}) .switch {
      ${Pv}
      background: ${yc};
    }

    :host(.checked) .switch {
      background: ${zl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${jl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${$l};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Lc};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Lc};
      cursor: pointer;
      ${Ev}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Lc};
      ${Ev}
      margin-inline-end: calc(${qa} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${qa} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${zl};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${ql};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${jl};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Zl};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${$l};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Jl};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new HC(cm`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,cm`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),Gm(cm`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Km.FieldText};
        }
        .switch {
          background: ${Km.Field};
          border-color: ${Km.FieldText};
        }
        :host(.checked) .switch {
          background: ${Km.Highlight};
          border-color: ${Km.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${Km.HighlightText};
          border-color: ${Km.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${Km.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${Km.Highlight};
        }
        :host(:${Ov}) .switch {
          forced-color-adjust: none;
          background: ${Km.Field}; 
          border-color: ${Km.Highlight};
          outline-color: ${Km.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Km.GrayText};
        }
        :host(.disabled) .switch {
          background: ${Km.Field};
          border-color: ${Km.GrayText};
        }
        .status-message,
        .label {
          color: ${Km.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});class QC extends Xg{}class ey extends(eC(QC)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const ty="text";class ny extends ey{constructor(){super(...arguments),this.type=ty}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&Bi.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}Qo([br({attribute:"readonly",mode:"boolean"})],ny.prototype,"readOnly",void 0),Qo([br({mode:"boolean"})],ny.prototype,"autofocus",void 0),Qo([br],ny.prototype,"placeholder",void 0),Qo([br],ny.prototype,"type",void 0),Qo([br],ny.prototype,"list",void 0),Qo([br({converter:yr})],ny.prototype,"maxlength",void 0),Qo([br({converter:yr})],ny.prototype,"minlength",void 0),Qo([br],ny.prototype,"pattern",void 0),Qo([br({converter:yr})],ny.prototype,"size",void 0),Qo([br({mode:"boolean"})],ny.prototype,"spellcheck",void 0),Qo([or],ny.prototype,"defaultSlottedNodes",void 0);class iy{}function oy(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}gv(iy,Lv),gv(ny,pv,iy);const ry=Xr.create("input-placeholder-rest").withDefault((e=>{const t=dc.getValueFor(e);return Fc.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),ay=Xr.create("input-placeholder-hover").withDefault((e=>{const t=dc.getValueFor(e);return Fc.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),sy=Xr.create("input-filled-placeholder-rest").withDefault((e=>{const t=Ec.getValueFor(e);return Fc.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),ly=Xr.create("input-filled-placeholder-hover").withDefault((e=>{const t=Ec.getValueFor(e);return Fc.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),cy=(e,t,n,i=":not([disabled]):not(:focus-within)")=>cm`
  ${n} {
    background: ${Ac};
  }

  :host(${i}:hover) ${n} {
    background: ${kc};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: ${Oc};
  }

  :host([disabled]) ${n} {
    background: ${Ac};
  }

  .control::placeholder {
    color: ${sy};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${ly};
  }
`,uy=(e,t,n,i=":not([disabled]):not(:focus-within)")=>cm`
  :host {
    color: ${Km.ButtonText};
  }

  ${n} {
    background: ${Km.ButtonFace};
    border-color: ${Km.ButtonText};
  }

  :host(${i}:hover) ${n},
  :host(:not([disabled]):focus-within) ${n} {
    border-color: ${Km.Highlight};
  }

  :host([disabled]) ${n} {
    opacity: 1;
    background: ${Km.ButtonFace};
    border-color: ${Km.GrayText};
  }

  .control::placeholder,
  :host(${i}:hover) .control::placeholder {
    color: ${Km.CanvasText};
  }

  :host(:not([disabled]):focus) ${n} {
    ${Dv}
    outline-color: ${Km.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${Km.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${Km.GrayText};
  }
`,dy=".root";class py extends ny{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}am([br],py.prototype,"appearance",void 0);const hy=py.compose({baseName:"text-field",baseClass:ny,template:(e,t)=>Hm`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${xv({property:"defaultSlottedNodes",filter:oy})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${fv(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${dv("control")}
            />
            ${hv(0,t)}
        </div>
    </template>
`,styles:(e,t)=>cm`
    ${Wm("inline-block")}

    ${((e,t,n)=>cm`
  :host {
    ${Ev}
    color: ${Lc};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${n} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${Qa} * 1px) solid transparent;
    border-radius: calc(${Za} * 1px);
    height: calc(${wv} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${Lc};
    cursor: pointer;
    ${Ev}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${n},
  :host([readonly]) ${n},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${aC};
  }

  :host([disabled]) {
    opacity: ${ja};
  }
`)(0,0,dy)}

    ${cm`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${es} * 1px);
      bottom: 0;
      border-bottom: calc(${es} * 1px) solid ${zl};
      border-bottom-left-radius: calc(${Za} * 1px);
      border-bottom-right-radius: calc(${Za} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${qa} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(jv("outline",((e,t,n,i=":not([disabled]):not(:focus-within)")=>cm`
  ${n} {
    background: padding-box linear-gradient(${pc}, ${pc}),
      border-box ${qc};
  }

  :host(${i}:hover) ${n} {
    background: padding-box linear-gradient(${hc}, ${hc}),
      border-box ${Zc};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: padding-box linear-gradient(${fc}, ${fc}),
      border-box ${qc};
  }
  
  :host([disabled]) ${n} {
    background: padding-box linear-gradient(${pc}, ${pc}),
      border-box ${Bc};
  }

  .control::placeholder {
    color: ${ry};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${ay};
  }
`)(0,0,dy)),jv("filled",cy(0,0,dy)),Gm(uy(0,0,dy))),shadowOptions:{delegatesFocus:!0}});class fy extends Xg{}class gy extends(tC(fy)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class my extends gy{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===rv)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}Qo([br({attribute:"readonly",mode:"boolean"})],my.prototype,"readOnly",void 0),Qo([or],my.prototype,"defaultSlottedNodes",void 0),Qo([or],my.prototype,"indeterminate",void 0);const vy=my.compose({baseName:"checkbox",template:(e,t)=>Hm`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${xv("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>cm`
    ${Wm("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${wv} / 2 + ${qa}) * 1px);
      height: calc((${wv} / 2 + ${qa}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Za} * 1px);
      border: calc(${Qa} * 1px) solid ${tu};
      background: ${mc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Ev}
      color: ${Lc};
      ${""} padding-inline-start: calc(${qa} * 2px + 2px);
      margin-inline-end: calc(${qa} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Lc};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${ql};
    }

    :host(:not(.disabled):hover) .control {
      background: ${vc};
      border-color: ${nu};
    }

    :host(:not(.disabled):active) .control {
      background: ${Cc};
      border-color: ${iu};
    }

    :host(:${Ov}) .control {
      background: ${yc};
      ${Pv}
    }

    :host(.checked) .control {
      background: ${zl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${jl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${$l};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${aC};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${ja};
    }
  `.withBehaviors(Gm(cm`
        .control {
          border-color: ${Km.FieldText};
          background: ${Km.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${Km.Highlight};
          background: ${Km.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${Km.FieldText};
        }
        :host(:${Ov}) .control {
          forced-color-adjust: none;
          outline-color: ${Km.FieldText};
          background: ${Km.Field};
          border-color: ${Km.Highlight};
        }
        :host(.checked) .control {
          background: ${Km.Highlight};
          border-color: ${Km.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${Km.HighlightText};
          border-color: ${Km.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${Km.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${Km.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${Km.GrayText};
          background: ${Km.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${Km.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '});function Cy(e){return kv(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class yy extends Xg{constructor(e,t,n,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),ir.notify(this,"value")}get value(){var e;return ir.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}Qo([or],yy.prototype,"checked",void 0),Qo([or],yy.prototype,"content",void 0),Qo([or],yy.prototype,"defaultSelected",void 0),Qo([br({mode:"boolean"})],yy.prototype,"disabled",void 0),Qo([br({attribute:"selected",mode:"boolean"})],yy.prototype,"selectedAttribute",void 0),Qo([or],yy.prototype,"selected",void 0),Qo([br({attribute:"value",mode:"fromView"})],yy.prototype,"initialValue",void 0);class Sy{}Qo([or],Sy.prototype,"ariaChecked",void 0),Qo([or],Sy.prototype,"ariaPosInSet",void 0),Qo([or],Sy.prototype,"ariaSelected",void 0),Qo([or],Sy.prototype,"ariaSetSize",void 0),gv(Sy,Lv),gv(yy,pv,Sy);class by extends Xg{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return ir.track(this,"options"),this._options}set options(e){this._options=e,ir.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,i=e+n;let o=null;switch(n){case-1:o=this.options.reduceRight(((e,t,n)=>!e&&!t.disabled&&n<i?t:e),o);break;case 1:o=this.options.reduce(((e,t,n)=>!e&&!t.disabled&&n>i?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){if("selected"===t)by.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),by.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case iv:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Zm:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case ev:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case ov:e.preventDefault(),this.selectLastOption();break;case av:return this.focusAndScrollOptionIntoView(),!0;case tv:case nv:return!0;case rv:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(this.hasSelectableOptions){if((null===(n=this.options[this.selectedIndex])||void 0===n?void 0:n.disabled)&&"number"==typeof e){const n=this.getSelectableIndex(e,t),i=n>-1?n:e;return this.selectedIndex=i,void(t===i&&this.selectedIndexChanged(t,i))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var n;const i=t.filter(by.slottedOptionFilter);null===(n=this.options)||void 0===n||n.forEach((e=>{const t=ir.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=i.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let n=e.length;for(;n--;)if(t(e[n],n,e))return n;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,n;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Cy(t)&&e.push(t),e)),[]);const n=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=zC("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}by.slottedOptionFilter=e=>Cy(e)&&!e.hidden,by.TYPE_AHEAD_TIMEOUT_MS=1e3,Qo([br({mode:"boolean"})],by.prototype,"disabled",void 0),Qo([or],by.prototype,"selectedIndex",void 0),Qo([or],by.prototype,"selectedOptions",void 0),Qo([or],by.prototype,"slottedOptions",void 0),Qo([or],by.prototype,"typeaheadBuffer",void 0);class Ty{}Qo([or],Ty.prototype,"ariaActiveDescendant",void 0),Qo([or],Ty.prototype,"ariaDisabled",void 0),Qo([or],Ty.prototype,"ariaExpanded",void 0),Qo([or],Ty.prototype,"ariaMultiSelectable",void 0),gv(Ty,Lv),gv(by,Ty);class xy extends by{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,i;this.ariaActiveDescendant=null!==(i=null===(n=this.options[t])||void 0===n?void 0:n.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=cv(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=cv(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=cv(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=cv(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return n&&!n.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case iv:return void this.checkFirstOption(n);case Zm:return void this.checkNextOption(n);case ev:return void this.checkPreviousOption(n);case ov:return void this.checkLastOption(n);case av:return this.focusAndScrollOptionIntoView(),!0;case nv:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case rv:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,null===(n=this.options)||void 0===n||n.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var n;const i=Math.max(0,parseInt(null!==(n=null==t?void 0:t.toFixed())&&void 0!==n?n:"",10));i!==t&&Bi.queueUpdate((()=>{this.size=i}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}Qo([or],xy.prototype,"activeIndex",void 0),Qo([br({mode:"boolean"})],xy.prototype,"multiple",void 0),Qo([br({converter:yr})],xy.prototype,"size",void 0);const Ey=class extends by{}.compose({baseName:"listbox",template:(e,t)=>Hm`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        <slot
            ${xv({filter:xy.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(e,t)=>cm`
    ${Wm("inline-flex")} :host {
      border: calc(${Qa} * 1px) solid ${Bc};
      border-radius: calc(${Za} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${qa} * 1px) 0;
    }

    ::slotted(${e.tagFor(yy)}) {
      margin: 0 calc(${qa} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Dv}
    }
  `}),Ay=yy.compose({baseName:"option",template:(e,t)=>Hm`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${fv(0,t)}
        <span class="content" part="content">
            <slot ${xv("content")}></slot>
        </span>
        ${hv(0,t)}
    </template>
`,styles:(e,t)=>cm`
    ${Wm("inline-flex")} :host {
      position: relative;
      ${Ev}
      background: ${Pc};
      border-radius: calc(${Za} * 1px);
      border: calc(${Qa} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Lc};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${wv} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${qa} * 3) - ${Qa} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${es} - ${Qa}) * 1px);
      top: calc((${wv} / 4) - ${es} * 1px);
      width: 3px;
      height: calc((${wv} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Za} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${wc};
    }

    :host(:not([disabled]):active) {
      background: ${Rc};
    }

    :host(:not([disabled]):active)::before {
      background: ${zl};
      height: calc(((${wv} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${zl};
    }

    :host(:${Ov}) {
      ${Dv}
      background: ${Nc};
    }

    :host([aria-selected='true']) {
      background: ${Ac};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${kc};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Ic};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${wc};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Rc};
    }

    :host([disabled]) {
      cursor: ${aC};
      opacity: ${ja};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(Gm(cm`
        :host {
          background: ${Km.ButtonFace};
          border-color: ${Km.ButtonFace};
          color: ${Km.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${Km.Highlight};
          color: ${Km.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${Km.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${Km.Canvas};
          color: ${Km.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Ov}) {
          outline-color: ${Km.CanvasText};
        }
      `))});class ky extends Xg{}class Iy extends(tC(ky)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Oy extends Iy{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==rv)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}Qo([br({attribute:"readonly",mode:"boolean"})],Oy.prototype,"readOnly",void 0),Qo([or],Oy.prototype,"name",void 0),Qo([or],Oy.prototype,"defaultSlottedNodes",void 0);const Dy=Oy.compose({baseName:"radio",template:(e,t)=>Hm`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${xv("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>cm`
    ${Wm("inline-flex")} :host {
      --input-size: calc((${wv} / 2) + ${qa});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${Qa} * 1px) solid ${tu};
      background: ${mc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Ev}
      color: ${Lc};
      ${""} padding-inline-start: calc(${qa} * 2px + 2px);
      margin-inline-end: calc(${qa} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${ql};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${vc};
      border-color: ${nu};
    }

    :host(:not(.disabled):active) .control {
      background: ${Cc};
      border-color: ${iu};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${Ov}) .control {
      ${Pv}
      background: ${yc};
    }

    :host(.checked) .control {
      background: ${zl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${jl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${$l};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${aC};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${ja};
    }
  `.withBehaviors(Gm(cm`
        .control {
          background: ${Km.Field};
          border-color: ${Km.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${Km.Highlight};
        }
        :host(:${Ov}) .control {
          forced-color-adjust: none;
          background: ${Km.Field};
          outline-color: ${Km.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${Km.Highlight};
          background: ${Km.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${Km.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${Km.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${Km.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${Km.Field};
          border-color: ${Km.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${Km.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '});class Py extends Xg{constructor(){super(...arguments),this.orientation=yC,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const n=e[t];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach((e=>{e!==n&&e.setAttribute("tabindex","-1")})):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,n=e.target,i=null!==n?t.indexOf(n):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&i===o||o===t.length-1&&o===i)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,n)=>e===t.length&&this.isInsideToolbar&&n===Qm,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Jm,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,t,e.key))this.moveRightOffGroup();else for(n===t.length&&(n=0);n<t.length&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;if(n+1>=t.length){if(this.isInsideToolbar)break;n=0}else n+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,n=n<0?t.length-1:n,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;n>=0&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;n-1<0?n=t.length-1:n-=1}},this.keydownHandler=e=>{const t=e.key;if(t in sv&&this.isInsideFoundationToolbar)return!0;switch(t){case tv:this.checkFocusedRadio();break;case Qm:case Zm:this.direction===gC.ltr?this.moveRight(e):this.moveLeft(e);break;case Jm:case ev:this.direction===gC.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=mC(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let n=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!n){const n=e[t-1];n.checked=!0,this.focusedRadio=n,n.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}Qo([br({attribute:"readonly",mode:"boolean"})],Py.prototype,"readOnly",void 0),Qo([br({attribute:"disabled",mode:"boolean"})],Py.prototype,"disabled",void 0),Qo([br],Py.prototype,"name",void 0),Qo([br],Py.prototype,"value",void 0),Qo([br],Py.prototype,"orientation",void 0),Qo([or],Py.prototype,"childItems",void 0),Qo([or],Py.prototype,"slottedRadioButtons",void 0);const wy=Py.compose({baseName:"radio-group",template:(e,t)=>Hm`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===yC?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${xv({property:"slottedRadioButtons",filter:Sv("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>cm`
  ${Wm("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`});class Ry extends Xg{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,i=t-e;this.percentComplete=0===i?0:Math.fround((n-e)/i*100)}}Qo([br({converter:yr})],Ry.prototype,"value",void 0),Qo([br({converter:yr})],Ry.prototype,"min",void 0),Qo([br({converter:yr})],Ry.prototype,"max",void 0),Qo([br({mode:"boolean"})],Ry.prototype,"paused",void 0),Qo([or],Ry.prototype,"percentComplete",void 0);class Ny extends Ry{}const _y=Ny.compose({baseName:"progress",template:(e,t)=>Hm`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${_C((e=>"number"==typeof e.value),Hm`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `)}
        ${_C((e=>"number"!=typeof e.value),Hm`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(e,t)=>cm`
    ${Wm("flex")} :host {
      align-items: center;
      height: calc((${Qa} * 3) * 1px);
    }

    .progress {
      background-color: ${tu};
      border-radius: calc(${qa} * 1px);
      width: 100%;
      height: calc(${Qa} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${zl};
      border-radius: calc(${qa} * 1px);
      height: calc((${Qa} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${Qa} * 3) * 1px);
      border-radius: calc(${qa} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${zl};
      border-radius: calc(${qa} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${zl};
      border-radius: calc(${qa} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Hc};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Hc};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(Gm(cm`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${Km.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${Km.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '});const My=class extends Ry{}.compose({baseName:"progress-ring",template:(e,t)=>Hm`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${_C((e=>"number"==typeof e.value),Hm`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${_C((e=>"number"!=typeof e.value),Hm`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>cm`
    ${Wm("flex")} :host {
      align-items: center;
      height: calc(${wv} * 1px);
      width: calc(${wv} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${zl};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${zl};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${Hc};
    }

    :host(.paused) .determinate {
      stroke: ${Hc};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(Gm(cm`
        .background {
          stroke: ${Km.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${Km.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${Km.GrayText};
        }
      `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '}),Ly=bC.compose({baseName:"divider",template:(e,t)=>Hm`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>cm`
    ${Wm("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${Qa} * 1px) solid ${Yc};
    }
  `});var Fy=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Hy=Fy.join(","),Uy="undefined"==typeof Element,By=Uy?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Gy=!Uy&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},Vy=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Wy=function(e){return"INPUT"===e.tagName},Ky=function(e){return function(e){return Wy(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Gy(e),i=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=i(window.CSS.escape(e.name));else try{t=i(e.name)}catch(e){return!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},zy=function(e){var t=e.getBoundingClientRect(),n=t.width,i=t.height;return 0===n&&0===i},jy=function(e,t){return!(t.disabled||function(e){return Wy(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,i=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=By.call(e,"details>summary:first-of-type")?e.parentElement:e;if(By.call(o,"details:not([open]) *"))return!0;var r=Gy(e).host,a=(null==r?void 0:r.ownerDocument.contains(r))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return zy(e)}else{if("function"==typeof i){for(var s=e;e;){var l=e.parentElement,c=Gy(e);if(l&&!l.shadowRoot&&!0===i(l))return zy(e);e=e.assignedSlot?e.assignedSlot:l||c===e.ownerDocument?l:c.host}e=s}if(a)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var i=t.children.item(n);if("LEGEND"===i.tagName)return!!By.call(t,"fieldset[disabled] *")||!i.contains(e)}return!0}t=t.parentElement}return!1}(t))},$y=function(e,t){return!(Ky(t)||Vy(t)<0||!jy(e,t))},Yy=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==By.call(e,Hy)&&$y(t,e)};class Xy extends Xg{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case nv:this.dismiss(),e.preventDefault();break;case av:this.handleTabKeyDown(e)}},this.handleDocumentFocus=e=>{!e.defaultPrevented&&this.shouldForceFocus(e.target)&&(this.focusFirstElement(),e.preventDefault())},this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;const t=this.getTabQueueBounds();return 0!==t.length?1===t.length?(t[0].focus(),void e.preventDefault()):void(e.shiftKey&&e.target===t[0]?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||e.target!==t[t.length-1]||(t[0].focus(),e.preventDefault())):void 0},this.getTabQueueBounds=()=>Xy.reduceTabbableItems([],this),this.focusFirstElement=()=>{const e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=e=>{const t=void 0===e?this.shouldTrapFocus():e;t&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),Bi.queueUpdate((()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()}))):!t&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=ir.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(e,t){if("hidden"===t)this.updateTrapFocus()}static reduceTabbableItems(e,t){return"-1"===t.getAttribute("tabindex")?e:Yy(t)||Xy.isFocusableFastElement(t)&&Xy.hasTabbableShadow(t)?(e.push(t),e):t.childElementCount?e.concat(Array.from(t.children).reduce(Xy.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var t,n;return!!(null===(n=null===(t=e.$fastController)||void 0===t?void 0:t.definition.shadowOptions)||void 0===n?void 0:n.delegatesFocus)}static hasTabbableShadow(e){var t,n;return Array.from(null!==(n=null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelectorAll("*"))&&void 0!==n?n:[]).some((e=>Yy(e)))}}Qo([br({mode:"boolean"})],Xy.prototype,"modal",void 0),Qo([br({mode:"boolean"})],Xy.prototype,"hidden",void 0),Qo([br({attribute:"trap-focus",mode:"boolean"})],Xy.prototype,"trapFocus",void 0),Qo([br({attribute:"aria-describedby"})],Xy.prototype,"ariaDescribedby",void 0),Qo([br({attribute:"aria-labelledby"})],Xy.prototype,"ariaLabelledby",void 0),Qo([br({attribute:"aria-label"})],Xy.prototype,"ariaLabel",void 0);const qy=Xy.compose({baseName:"dialog",template:(e,t)=>Hm`
    <div class="positioning-region" part="positioning-region">
        ${_C((e=>e.modal),Hm`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${dv("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:(e,t)=>cm`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${RC};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${Ja} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${Vl};
    z-index: 1;
    border: calc(${Qa} * 1px) solid transparent;
  }
`});class Zy extends xy{}class Jy extends(eC(Zy)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Qy="above",eS="below";class tS extends Jy{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=zC("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void Bi.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return ir.track(this,"value"),this._value}set value(e){var t,n,i,o,r,a,s;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(i=null===(n=this._options[this.selectedIndex])||void 0===n?void 0:n.value)&&void 0!==i?i:null,c=null!==(r=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==r?r:null;-1!==t&&l===c||(e="",this.selectedIndex=t),e=null!==(s=null===(a=this.firstSelectedOption)||void 0===a?void 0:a.value)&&void 0!==s?s:e}l!==e&&(this._value=e,super.valueChanged(l,e),ir.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==n?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Qy:eS,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Qy?~~e.top:~~t}get displayValue(){var e,t;return ir.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;this.isSameNode(n)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(n))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{ir.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{ir.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),null===(n=this.options)||void 0===n||n.forEach(((e,t)=>{var n;const i=null===(n=this.proxy)||void 0===n?void 0:n.options.item(t);i&&(i.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(by.slottedOptionFilter),n=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===n?0:n}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case rv:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case iv:case ov:e.preventDefault();break;case tv:e.preventDefault(),this.open=!this.open;break;case nv:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case av:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Zm||t===ev)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&ir.notify(this,"displayValue")}}Qo([br({attribute:"open",mode:"boolean"})],tS.prototype,"open",void 0),Qo([rr],tS.prototype,"collapsible",null),Qo([or],tS.prototype,"control",void 0),Qo([br({attribute:"position"})],tS.prototype,"positionAttribute",void 0),Qo([or],tS.prototype,"position",void 0),Qo([or],tS.prototype,"maxHeight",void 0);class nS{}Qo([or],nS.prototype,"ariaControls",void 0),gv(nS,Ty),gv(tS,pv,nS);const iS=".control",oS=":not([disabled]):not([open])",rS="[disabled]";class aS extends tS{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Vl.setValueFor(this.listbox,Ll)}}am([br({mode:"fromView"})],aS.prototype,"appearance",void 0);const sS=aS.compose({baseName:"select",baseClass:tS,template:(e,t)=>Hm`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${_C((e=>e.collapsible),Hm`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${dv("control")}
                >
                    ${fv(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${hv(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${dv("listbox")}
        >
            <slot
                ${xv({filter:by.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>cm`
    ${Wm("inline-flex")}
    
    :host {
      border-radius: calc(${Za} * 1px);
      box-sizing: border-box;
      color: ${Lc};
      fill: currentcolor;
      font-family: ${ts};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${PC};
      background: ${Vl};
      border-radius: calc(${Ja} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${wv} * 1px));
      padding: calc((${qa} - ${Qa} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${Qa} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${Qa} * 1px) solid transparent;
      border-radius: calc(${Za} * 1px);
      height: calc(${wv} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Ev}
      min-height: 100%;
      padding: 0 calc(${qa} * 2.25px);
      width: 100%;
    }

    :host(:${Ov}) {
      ${Dv}
    }

    :host([disabled]) .control {
      cursor: ${aC};
      opacity: ${ja};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${wv} + ${qa} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${wv} + ${qa} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `.withBehaviors(jv("outline",Bv(0,0,oS,rS)),jv("filled",cy(0,0,iS,oS).withBehaviors(Gm(uy(0,0,iS,oS)))),jv("stealth",Kv(0,0,oS,rS)),Gm(cm`
    :host([open]) .listbox {
      background: ${Km.ButtonFace};
      border-color: ${Km.CanvasText};
    }
  `)),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),lS=FC.compose({baseName:"anchored-region",template:(e,t)=>Hm`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${_C((e=>e.initialLayoutComplete),Hm`
                <slot></slot>
            `)}
    </template>
`,styles:(e,t)=>cm`
  :host {
    contain: layout;
    display: block;
  }
`}),cS="top",uS="right",dS="bottom",pS="left",hS="start",fS="end",gS="top-left",mS="top-right",vS="bottom-left",CS="bottom-right",yS="top-start",SS="top-end",bS="bottom-start",TS="bottom-end";class xS extends Xg{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=gC.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout((()=>{this.updateTooltipVisibility()}),60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{this.isAnchorHoveredFocused||(this.delay>1?null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout((()=>{this.startHover()}),this.delay)):this.startHover())},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&this.tooltipVisible&&e.key===nv)this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss")},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=mC(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),Bi.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!==this.region&&void 0!==this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(null!=e&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),null!==this.anchorElement&&void 0!==this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach((t=>{t.id===e&&this.startShowDelayTimer()}))}null!==this.region&&void 0!==this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!==this.region&&void 0!==this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case cS:case dS:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case uS:case pS:case hS:case fS:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case gS:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case mS:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case vS:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case CS:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case yS:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case SS:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case bS:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case TS:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}Qo([br({mode:"boolean"})],xS.prototype,"visible",void 0),Qo([br],xS.prototype,"anchor",void 0),Qo([br],xS.prototype,"delay",void 0),Qo([br],xS.prototype,"position",void 0),Qo([br({attribute:"auto-update-mode"})],xS.prototype,"autoUpdateMode",void 0),Qo([br({attribute:"horizontal-viewport-lock"})],xS.prototype,"horizontalViewportLock",void 0),Qo([br({attribute:"vertical-viewport-lock"})],xS.prototype,"verticalViewportLock",void 0),Qo([or],xS.prototype,"anchorElement",void 0),Qo([or],xS.prototype,"viewportElement",void 0),Qo([or],xS.prototype,"verticalPositioningMode",void 0),Qo([or],xS.prototype,"horizontalPositioningMode",void 0),Qo([or],xS.prototype,"horizontalInset",void 0),Qo([or],xS.prototype,"verticalInset",void 0),Qo([or],xS.prototype,"horizontalScaling",void 0),Qo([or],xS.prototype,"verticalScaling",void 0),Qo([or],xS.prototype,"verticalDefaultPosition",void 0),Qo([or],xS.prototype,"horizontalDefaultPosition",void 0),Qo([or],xS.prototype,"tooltipVisible",void 0),Qo([or],xS.prototype,"currentDirection",void 0);const ES=class extends xS{connectedCallback(){super.connectedCallback(),Vl.setValueFor(this,Ll)}}.compose({baseName:"tooltip",baseClass:xS,template:(e,t)=>Hm`
        ${_C((e=>e.tooltipVisible),Hm`
            <${e.tagFor(FC)}
                fixed-placement="true"
                auto-update-mode="${e=>e.autoUpdateMode}"
                vertical-positioning-mode="${e=>e.verticalPositioningMode}"
                vertical-default-position="${e=>e.verticalDefaultPosition}"
                vertical-inset="${e=>e.verticalInset}"
                vertical-scaling="${e=>e.verticalScaling}"
                horizontal-positioning-mode="${e=>e.horizontalPositioningMode}"
                horizontal-default-position="${e=>e.horizontalDefaultPosition}"
                horizontal-scaling="${e=>e.horizontalScaling}"
                horizontal-inset="${e=>e.horizontalInset}"
                vertical-viewport-lock="${e=>e.horizontalViewportLock}"
                horizontal-viewport-lock="${e=>e.verticalViewportLock}"
                dir="${e=>e.currentDirection}"
                ${dv("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${e.tagFor(FC)}>
        `)}
    `,styles:(e,t)=>cm`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${Za} * 1px);
      border: calc(${Qa} * 1px) solid ${Qc};
      background: ${Vl};
      color: ${Lc};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Ev}
      white-space: nowrap;
      box-shadow: ${OC};
    }

    ${e.tagFor(FC)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${e.tagFor(FC)}.right,
    ${e.tagFor(FC)}.left {
      flex-direction: column;
    }

    ${e.tagFor(FC)}.top .tooltip::after,
    ${e.tagFor(FC)}.bottom .tooltip::after,
    ${e.tagFor(FC)}.left .tooltip::after,
    ${e.tagFor(FC)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Vl};
      border-top: calc(${Qa} * 1px) solid ${Qc};
      border-left: calc(${Qa} * 1px) solid ${Qc};
      position: absolute;
    }

    ${e.tagFor(FC)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${e.tagFor(FC)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${e.tagFor(FC)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${e.tagFor(FC)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${e.tagFor(FC)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${e.tagFor(FC)}.left .tooltip {
      margin-right: 12px;
    }

    ${e.tagFor(FC)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${e.tagFor(FC)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(Gm(cm`
        :host([disabled]) {
          opacity: 1;
        }
        ${e.tagFor(FC)}.top .tooltip::after,
        ${e.tagFor(FC)}.bottom .tooltip::after,
        ${e.tagFor(FC)}.left .tooltip::after,
        ${e.tagFor(FC)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }