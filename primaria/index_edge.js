/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'fondo',
            type:'image',
            rect:['0','0','1024px','700px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fondo.jpg",'0px','0px']
         },
         {
            id:'mc_espanol2',
            type:'rect',
            rect:['338','316','auto','auto','auto','auto']
         },
         {
            id:'mc_mate2',
            type:'rect',
            rect:['488','316','auto','auto','auto','auto']
         },
         {
            id:'taller',
            type:'image',
            rect:['51px','474px','300px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"taller.png",'0px','0px']
         },
         {
            id:'icono_portal',
            type:'image',
            rect:['362px','474px','300px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"icono_portal.jpg",'0px','0px']
         },
         {
            id:'ico_prese',
            type:'image',
            rect:['821px','159px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ico_prese.jpg",'0px','0px']
         },
         {
            id:'educacion',
            type:'image',
            rect:['512px','316px','300px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"educacion.png",'0px','0px']
         },
         {
            id:'mate1',
            type:'image',
            rect:['51px','159px','300px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mate1.png",'0px','0px']
         },
         {
            id:'cienciasnatu',
            type:'image',
            rect:['361px','159px','300px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cienciasnatu.png",'0px','0px']
         },
         {
            id:'cienciasnatu_2',
            type:'image',
            rect:['512px','316','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cienciasnatu_2.png",'0px','0px']
         },
         {
            id:'espanol',
            type:'image',
            rect:['362','316','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"espanol.png",'0px','0px']
         },
         {
            id:'educacion_basica_sec',
            type:'image',
            rect:['671px','474px','300px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"educacion_basica_sec.jpg",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'mc_mate2',
            symbolName:'mc_mate2'
         },
         {
            id:'mc_espanol2',
            symbolName:'mc_espanol2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_educacion}": [
            ["style", "top", '316px'],
            ["style", "opacity", '0'],
            ["style", "left", '51px'],
            ["style", "width", '300px']
         ],
         "${_mc_espanol2}": [
            ["style", "opacity", '0'],
            ["style", "left", '670px'],
            ["style", "overflow", 'hidden']
         ],
         "${_cienciasnatu}": [
            ["style", "top", '159px'],
            ["style", "opacity", '0'],
            ["style", "left", '361px']
         ],
         "${_icono_portal}": [
            ["style", "top", '474px'],
            ["style", "height", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '359px'],
            ["style", "width", '300px']
         ],
         "${_mate1}": [
            ["style", "top", '159px'],
            ["style", "opacity", '0'],
            ["style", "left", '51px']
         ],
         "${_espanol}": [
            ["style", "left", '362px'],
            ["style", "opacity", '0']
         ],
         "${_cienciasnatu_2}": [
            ["style", "left", '512px'],
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '700px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mc_mate2}": [
            ["style", "opacity", '0'],
            ["style", "left", '820px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ico_prese}": [
            ["style", "top", '159px'],
            ["style", "opacity", '0'],
            ["style", "left", '671px'],
            ["style", "width", '300px']
         ],
         "${_taller}": [
            ["style", "top", '474px'],
            ["style", "opacity", '0'],
            ["style", "left", '48px']
         ],
         "${_educacion_basica_sec}": [
            ["style", "top", '474px'],
            ["style", "opacity", '0'],
            ["style", "left", '671px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid218", tween: [ "style", "${_taller}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid288", tween: [ "style", "${_espanol}", "left", '342px', { fromValue: '362px'}], position: 500, duration: 110 },
            { id: "eid286", tween: [ "style", "${_espanol}", "left", '361px', { fromValue: '342px'}], position: 610, duration: 390 },
            { id: "eid279", tween: [ "style", "${_icono_portal}", "width", '300px', { fromValue: '300px'}], position: 1000, duration: 0 },
            { id: "eid278", tween: [ "style", "${_cienciasnatu}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid269", tween: [ "style", "${_mate1}", "left", '31px', { fromValue: '51px'}], position: 500, duration: 110 },
            { id: "eid270", tween: [ "style", "${_mate1}", "left", '51px', { fromValue: '31px'}], position: 610, duration: 390 },
            { id: "eid257", tween: [ "style", "${_ico_prese}", "width", '300px', { fromValue: '300px'}], position: 1000, duration: 0 },
            { id: "eid239", tween: [ "style", "${_ico_prese}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid194", tween: [ "style", "${_taller}", "left", '33px', { fromValue: '48px'}], position: 500, duration: 110 },
            { id: "eid207", tween: [ "style", "${_taller}", "left", '51px', { fromValue: '33px'}], position: 610, duration: 390 },
            { id: "eid261", tween: [ "style", "${_ico_prese}", "left", '653px', { fromValue: '671px'}], position: 500, duration: 110 },
            { id: "eid262", tween: [ "style", "${_ico_prese}", "left", '671px', { fromValue: '653px'}], position: 610, duration: 390 },
            { id: "eid198", tween: [ "style", "${_mc_espanol2}", "left", '653px', { fromValue: '670px'}], position: 500, duration: 110 },
            { id: "eid214", tween: [ "style", "${_mc_espanol2}", "left", '671px', { fromValue: '653px'}], position: 610, duration: 390 },
            { id: "eid251", tween: [ "style", "${_educacion}", "left", '31px', { fromValue: '51px'}], position: 500, duration: 110 },
            { id: "eid249", tween: [ "style", "${_educacion}", "left", '51px', { fromValue: '31px'}], position: 610, duration: 390 },
            { id: "eid301", tween: [ "style", "${_educacion_basica_sec}", "left", '651px', { fromValue: '671px'}], position: 500, duration: 110 },
            { id: "eid300", tween: [ "style", "${_educacion_basica_sec}", "left", '671px', { fromValue: '651px'}], position: 610, duration: 390 },
            { id: "eid196", tween: [ "style", "${_icono_portal}", "left", '344px', { fromValue: '359px'}], position: 500, duration: 110 },
            { id: "eid206", tween: [ "style", "${_icono_portal}", "left", '362px', { fromValue: '344px'}], position: 610, duration: 390 },
            { id: "eid303", tween: [ "style", "${_educacion_basica_sec}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid243", tween: [ "style", "${_icono_portal}", "height", '148px', { fromValue: '148px'}], position: 1000, duration: 0 },
            { id: "eid296", tween: [ "style", "${_espanol}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid289", tween: [ "style", "${_cienciasnatu_2}", "left", '492px', { fromValue: '512px'}], position: 500, duration: 110 },
            { id: "eid287", tween: [ "style", "${_cienciasnatu_2}", "left", '511px', { fromValue: '492px'}], position: 610, duration: 390 },
            { id: "eid222", tween: [ "style", "${_mc_espanol2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid227", tween: [ "style", "${_mc_mate2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid253", tween: [ "style", "${_educacion}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid277", tween: [ "style", "${_mate1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid220", tween: [ "style", "${_icono_portal}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid297", tween: [ "style", "${_cienciasnatu_2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid203", tween: [ "style", "${_mc_mate2}", "left", '803px', { fromValue: '820px'}], position: 500, duration: 110 },
            { id: "eid210", tween: [ "style", "${_mc_mate2}", "left", '821px', { fromValue: '803px'}], position: 610, duration: 390 },
            { id: "eid271", tween: [ "style", "${_cienciasnatu}", "left", '341px', { fromValue: '361px'}], position: 500, duration: 110 },
            { id: "eid272", tween: [ "style", "${_cienciasnatu}", "left", '361px', { fromValue: '341px'}], position: 610, duration: 390 }         ]
      }
   }
},
"mc_espanol1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'espanol',
      type: 'image',
      rect: ['23px','0px','300px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/espanol.png','0px','0px']
   },
   {
      id: 'espanol_u',
      type: 'image',
      rect: ['0','148px','300px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/espanol_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '300px']
         ],
         "${_espanol_u}": [
            ["style", "top", '148px']
         ],
         "${_espanol}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11000,
         autoPlay: true,
         timeline: [
            { id: "eid107", tween: [ "style", "${_espanol}", "top", '-149px', { fromValue: '0px'}], position: 7000, duration: 500 },
            { id: "eid114", tween: [ "style", "${_espanol_u}", "top", '-1px', { fromValue: '148px'}], position: 7000, duration: 500 }         ]
      }
   }
},
"mc_mate1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mate1',
      type: 'image',
      rect: ['23px','0px','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mate1.png','0px','0px']
   },
   {
      id: 'mate1_u',
      type: 'image',
      rect: ['0','0','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mate1_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '150px']
         ],
         "${_mate1_u}": [
            ["style", "top", '148px']
         ],
         "${_mate1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18000,
         autoPlay: true,
         timeline: [
            { id: "eid126", tween: [ "style", "${_mate1_u}", "top", '0px', { fromValue: '148px'}], position: 13000, duration: 445 },
            { id: "eid123", tween: [ "style", "${_mate1}", "top", '-149px', { fromValue: '0px'}], position: 13000, duration: 445 }         ]
      }
   }
},
"mc_espanol2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'espanol2',
      type: 'image',
      rect: ['23px','0px','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/espanol2.png','0px','0px']
   },
   {
      id: 'espanol2_u',
      type: 'image',
      rect: ['0','0','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/espanol2_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_espanol2_u}": [
            ["style", "top", '148px']
         ],
         "${_espanol2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23000,
         autoPlay: true,
         timeline: [
            { id: "eid138", tween: [ "style", "${_espanol2_u}", "top", '0px', { fromValue: '148px'}], position: 20000, duration: 500 },
            { id: "eid135", tween: [ "style", "${_espanol2}", "top", '-148px', { fromValue: '0px'}], position: 20000, duration: 500 }         ]
      }
   }
},
"mc_mate2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mate2',
      type: 'image',
      rect: ['23px','0px','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mate2.png','0px','0px']
   },
   {
      id: 'mate2_u',
      type: 'image',
      rect: ['0','0','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mate2_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '150px']
         ],
         "${_mate2_u}": [
            ["style", "top", '148px']
         ],
         "${_mate2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         timeline: [
            { id: "eid144", tween: [ "style", "${_mate2_u}", "top", '0px', { fromValue: '148px'}], position: 6000, duration: 500 },
            { id: "eid141", tween: [ "style", "${_mate2}", "top", '-149px', { fromValue: '0px'}], position: 6000, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-24649434");
