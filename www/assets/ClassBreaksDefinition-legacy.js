System.register(["./index-legacy.js"],(function(e,i){"use strict";var t,a,s,n,r,l;return{setters:[e=>{t=e.c5,a=e.x,s=e.c6,n=e.y,r=e.z,l=e.bX}],execute:function(){const i=new t({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),o=new t({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let d=class extends l{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};a([s({classBreaksDef:"class-breaks-definition"})],d.prototype,"type",void 0),a([n({json:{write:!0}})],d.prototype,"breakCount",void 0),a([n({json:{write:!0}})],d.prototype,"classificationField",void 0),a([n({type:String,json:{read:i.read,write:i.write}})],d.prototype,"classificationMethod",void 0),a([n({json:{write:!0}})],d.prototype,"normalizationField",void 0),a([n({json:{read:o.read,write:o.write}})],d.prototype,"normalizationType",void 0),a([n({value:null,json:{write:!0}})],d.prototype,"standardDeviationInterval",null),a([n({value:null,json:{write:!0}})],d.prototype,"definedInterval",null),d=a([r("esri.rest.support.ClassBreaksDefinition")],d),e("d",d)}}}));
