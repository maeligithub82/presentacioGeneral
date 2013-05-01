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
            id:'mc_biolo1',
            type:'rect',
            rect:['178','316','auto','auto','auto','auto']
         },
         {
            id:'mc_espanol13',
            type:'rect',
            rect:['28','159','auto','auto','auto','auto']
         },
         {
            id:'mc_espanol2',
            type:'rect',
            rect:['338','316','auto','auto','auto','auto']
         },
         {
            id:'espanol3',
            type:'image',
            rect:['671px','159px','300px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"espanol3.png",'0px','0px']
         },
         {
            id:'mc_fisica2',
            type:'rect',
            rect:['338','159','auto','auto','auto','auto']
         },
         {
            id:'mc_mate1',
            type:'rect',
            rect:['28','316','auto','auto','auto','auto']
         },
         {
            id:'mc_mate2',
            type:'rect',
            rect:['488','316','auto','auto','auto','auto']
         },
         {
            id:'mate3',
            type:'image',
            rect:['671px','316px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mate3.png",'0px','0px']
         },
         {
            id:'quimica3',
            type:'image',
            rect:['821px','316px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"quimica3.png",'0px','0px']
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
            rect:['821px','474px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ico_prese.jpg",'0px','0px']
         },
         {
            id:'ldm',
            type:'image',
            rect:['671px','474px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ldm.jpg",'0px','0px']
         },
         {
            id:'educacion',
            type:'image',
            rect:['512px','474px','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"educacion.png",'0px','0px']
         },
         {
            id:'taller2',
            type:'image',
            rect:['51','474','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"taller2.jpg",'0px','0px']
         },
         {
            id:'edubasica_pri',
            type:'image',
            rect:['201','474','150px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edubasica_pri.jpg",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'mc_fisica2',
            symbolName:'mc_fisica2'
         },
         {
            id:'mc_biolo1',
            symbolName:'mc_biolo1'
         },
         {
            id:'mc_mate1',
            symbolName:'mc_mate1'
         },
         {
            id:'mc_espanol13',
            symbolName:'mc_espanol1'
         },
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
         "${_taller2}": [
            ["style", "left", '41px'],
            ["style", "opacity", '0']
         ],
         "${_mc_fisica2}": [
            ["style", "opacity", '0'],
            ["style", "left", '358px'],
            ["style", "overflow", 'hidden']
         ],
         "${_educacion}": [
            ["style", "top", '474px'],
            ["style", "opacity", '0'],
            ["style", "left", '508px']
         ],
         "${_mc_espanol2}": [
            ["style", "opacity", '0'],
            ["style", "left", '358px'],
            ["style", "overflow", 'hidden']
         ],
         "${_edubasica_pri}": [
            ["style", "left", '191px'],
            ["style", "opacity", '0']
         ],
         "${_mate3}": [
            ["style", "top", '316px'],
            ["style", "opacity", '0'],
            ["style", "left", '668px']
         ],
         "${_icono_portal}": [
            ["style", "top", '474px'],
            ["style", "height", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '359px'],
            ["style", "width", '150px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '700px'],
            ["style", "width", '1024px']
         ],
         "${_espanol3}": [
            ["style", "top", '159px'],
            ["style", "opacity", '0'],
            ["style", "left", '668px']
         ],
         "${_quimica3}": [
            ["style", "top", '316px'],
            ["style", "opacity", '0'],
            ["style", "left", '818px']
         ],
         "${_mc_mate1}": [
            ["style", "opacity", '0'],
            ["style", "left", '48px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mc_biolo1}": [
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mc_mate2}": [
            ["style", "opacity", '0'],
            ["style", "left", '508px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mc_espanol13}": [
            ["style", "opacity", '0'],
            ["style", "left", '48px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ico_prese}": [
            ["style", "top", '474px'],
            ["style", "opacity", '0'],
            ["style", "left", '821px']
         ],
         "${_ldm}": [
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
            { id: "eid224", tween: [ "style", "${_espanol3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid217", tween: [ "style", "${_mc_biolo1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid195", tween: [ "style", "${_mc_mate1}", "left", '33px', { fromValue: '48px'}], position: 500, duration: 110 },
            { id: "eid211", tween: [ "style", "${_mc_mate1}", "left", '51px', { fromValue: '33px'}], position: 610, duration: 390 },
            { id: "eid199", tween: [ "style", "${_mate3}", "left", '653px', { fromValue: '668px'}], position: 500, duration: 110 },
            { id: "eid209", tween: [ "style", "${_mate3}", "left", '671px', { fromValue: '653px'}], position: 610, duration: 390 },
            { id: "eid264", tween: [ "style", "${_taller2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid245", tween: [ "style", "${_icono_portal}", "width", '150px', { fromValue: '150px'}], position: 1000, duration: 0 },
            { id: "eid203", tween: [ "style", "${_mc_mate2}", "left", '493px', { fromValue: '508px'}], position: 500, duration: 110 },
            { id: "eid210", tween: [ "style", "${_mc_mate2}", "left", '511px', { fromValue: '493px'}], position: 610, duration: 390 },
            { id: "eid240", tween: [ "style", "${_ldm}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid258", tween: [ "style", "${_taller2}", "left", '31px', { fromValue: '41px'}], position: 500, duration: 110 },
            { id: "eid257", tween: [ "style", "${_taller2}", "left", '51px', { fromValue: '31px'}], position: 610, duration: 390 },
            { id: "eid193", tween: [ "style", "${_mc_biolo1}", "left", '183px', { fromValue: '198px'}], position: 500, duration: 110 },
            { id: "eid216", tween: [ "style", "${_mc_biolo1}", "left", '201px', { fromValue: '183px'}], position: 610, duration: 390 },
            { id: "eid239", tween: [ "style", "${_ico_prese}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid259", tween: [ "style", "${_edubasica_pri}", "left", '181px', { fromValue: '191px'}], position: 500, duration: 110 },
            { id: "eid256", tween: [ "style", "${_edubasica_pri}", "left", '201px', { fromValue: '181px'}], position: 610, duration: 390 },
            { id: "eid231", tween: [ "style", "${_ico_prese}", "left", '803px', { fromValue: '821px'}], position: 500, duration: 110 },
            { id: "eid233", tween: [ "style", "${_ico_prese}", "left", '821px', { fromValue: '803px'}], position: 610, duration: 390 },
            { id: "eid198", tween: [ "style", "${_mc_espanol2}", "left", '343px', { fromValue: '358px'}], position: 500, duration: 110 },
            { id: "eid214", tween: [ "style", "${_mc_espanol2}", "left", '361px', { fromValue: '343px'}], position: 610, duration: 390 },
            { id: "eid201", tween: [ "style", "${_quimica3}", "left", '803px', { fromValue: '818px'}], position: 500, duration: 110 },
            { id: "eid208", tween: [ "style", "${_quimica3}", "left", '821px', { fromValue: '803px'}], position: 610, duration: 390 },
            { id: "eid251", tween: [ "style", "${_educacion}", "left", '492px', { fromValue: '508px'}], position: 500, duration: 110 },
            { id: "eid249", tween: [ "style", "${_educacion}", "left", '512px', { fromValue: '492px'}], position: 610, duration: 390 },
            { id: "eid265", tween: [ "style", "${_edubasica_pri}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid227", tween: [ "style", "${_mc_mate2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid200", tween: [ "style", "${_espanol3}", "left", '653px', { fromValue: '668px'}], position: 500, duration: 110 },
            { id: "eid213", tween: [ "style", "${_espanol3}", "left", '671px', { fromValue: '653px'}], position: 610, duration: 390 },
            { id: "eid222", tween: [ "style", "${_mc_espanol2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid232", tween: [ "style", "${_ldm}", "left", '653px', { fromValue: '671px'}], position: 500, duration: 110 },
            { id: "eid234", tween: [ "style", "${_ldm}", "left", '671px', { fromValue: '653px'}], position: 610, duration: 390 },
            { id: "eid223", tween: [ "style", "${_mate3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid202", tween: [ "style", "${_mc_fisica2}", "left", '343px', { fromValue: '358px'}], position: 500, duration: 110 },
            { id: "eid212", tween: [ "style", "${_mc_fisica2}", "left", '361px', { fromValue: '343px'}], position: 610, duration: 390 },
            { id: "eid225", tween: [ "style", "${_quimica3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid219", tween: [ "style", "${_mc_mate1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid221", tween: [ "style", "${_mc_espanol13}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid253", tween: [ "style", "${_educacion}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid196", tween: [ "style", "${_icono_portal}", "left", '344px', { fromValue: '359px'}], position: 500, duration: 110 },
            { id: "eid206", tween: [ "style", "${_icono_portal}", "left", '362px', { fromValue: '344px'}], position: 610, duration: 390 },
            { id: "eid220", tween: [ "style", "${_icono_portal}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid226", tween: [ "style", "${_mc_fisica2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid197", tween: [ "style", "${_mc_espanol13}", "left", '33px', { fromValue: '48px'}], position: 500, duration: 110 },
            { id: "eid215", tween: [ "style", "${_mc_espanol13}", "left", '51px', { fromValue: '33px'}], position: 610, duration: 390 },
            { id: "eid243", tween: [ "style", "${_icono_portal}", "height", '148px', { fromValue: '148px'}], position: 1000, duration: 0 }         ]
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
         "${_espanol}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_espanol_u}": [
            ["style", "top", '148px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '300px']
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
"mc_fisica2": {
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
      id: 'fisica2',
      type: 'image',
      rect: ['23px','0px','300px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fisica2.png','0px','0px']
   },
   {
      id: 'fisica2_u',
      type: 'image',
      rect: ['0','0','300px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fisica2_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fisica2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_fisica2_u}": [
            ["style", "top", '148px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         timeline: [
            { id: "eid117", tween: [ "style", "${_fisica2}", "top", '-148px', { fromValue: '0px'}], position: 9000, duration: 500 },
            { id: "eid120", tween: [ "style", "${_fisica2_u}", "top", '0px', { fromValue: '148px'}], position: 9000, duration: 500 }         ]
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
         "${_mate1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_mate1_u}": [
            ["style", "top", '148px']
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
         duration: 18000,
         autoPlay: true,
         timeline: [
            { id: "eid126", tween: [ "style", "${_mate1_u}", "top", '0px', { fromValue: '148px'}], position: 13000, duration: 445 },
            { id: "eid123", tween: [ "style", "${_mate1}", "top", '-149px', { fromValue: '0px'}], position: 13000, duration: 445 }         ]
      }
   }
},
"mc_biolo1": {
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
      id: 'biologia',
      type: 'image',
      rect: ['23px','0px','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/biologia.png','0px','0px']
   },
   {
      id: 'biologia_u',
      type: 'image',
      rect: ['0','0','150px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/biologia_u.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_biologia}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '150px']
         ],
         "${_biologia_u}": [
            ["style", "top", '148px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid132", tween: [ "style", "${_biologia_u}", "top", '0px', { fromValue: '148px'}], position: 4000, duration: 500 },
            { id: "eid65", tween: [ "style", "${_biologia}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid99", tween: [ "style", "${_biologia}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid129", tween: [ "style", "${_biologia}", "top", '-149px', { fromValue: '0px'}], position: 4000, duration: 500 }         ]
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
         "${_mate2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_mate2_u}": [
            ["style", "top", '148px']
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
