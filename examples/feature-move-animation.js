import Feature from '../src/ol/Feature.js';
import Map from '../src/ol/Map.js';
import View from '../src/ol/View.js';
import Polyline from '../src/ol/format/Polyline.js';
import Point from '../src/ol/geom/Point.js';
import TileLayer from '../src/ol/layer/Tile.js';
import VectorLayer from '../src/ol/layer/Vector.js';
import BingMaps from '../src/ol/source/BingMaps.js';
import VectorSource from '../src/ol/source/Vector.js';
import CircleStyle from '../src/ol/style/Circle.js';
import Fill from '../src/ol/style/Fill.js';
import Icon from '../src/ol/style/Icon.js';
import Stroke from '../src/ol/style/Stroke.js';
import Style from '../src/ol/style/Style.js';

// This long string is placed here due to jsFiddle limitations.
// It is usually loaded with AJAX.
var polyline = [
  'hldhx@lnau`BCG_EaC??cFjAwDjF??uBlKMd@}@z@??aC^yk@z_@se@b[wFdE??wFfE}N',
  'fIoGxB_I\\gG}@eHoCyTmPqGaBaHOoD\\??yVrGotA|N??o[N_STiwAtEmHGeHcAkiA}^',
  'aMyBiHOkFNoI`CcVvM??gG^gF_@iJwC??eCcA]OoL}DwFyCaCgCcCwDcGwHsSoX??wI_E',
  'kUFmq@hBiOqBgTwS??iYse@gYq\\cp@ce@{vA}s@csJqaE}{@iRaqE{lBeRoIwd@_T{]_',
  'Ngn@{PmhEwaA{SeF_u@kQuyAw]wQeEgtAsZ}LiCarAkVwI}D??_}RcjEinPspDwSqCgs@',
  'sPua@_OkXaMeT_Nwk@ob@gV}TiYs[uTwXoNmT{Uyb@wNg]{Nqa@oDgNeJu_@_G}YsFw]k',
  'DuZyDmm@i_@uyIJe~@jCg|@nGiv@zUi_BfNqaAvIow@dEed@dCcf@r@qz@Egs@{Acu@mC',
  'um@yIey@gGig@cK_m@aSku@qRil@we@{mAeTej@}Tkz@cLgr@aHko@qOmcEaJw~C{w@ka',
  'i@qBchBq@kmBS{kDnBscBnFu_Dbc@_~QHeU`IuyDrC_}@bByp@fCyoA?qMbD}{AIkeAgB',
  'k_A_A{UsDke@gFej@qH{o@qGgb@qH{`@mMgm@uQus@kL{_@yOmd@ymBgwE}x@ouBwtA__',
  'DuhEgaKuWct@gp@cnBii@mlBa_@}|Asj@qrCg^eaC}L{dAaJ_aAiOyjByH{nAuYu`GsAw',
  'Xyn@ywMyOyqD{_@cfIcDe}@y@aeBJmwA`CkiAbFkhBlTgdDdPyiB`W}xDnSa}DbJyhCrX',
  'itAhT}x@bE}Z_@qW_Kwv@qKaaAiBgXvIm}A~JovAxCqW~WanB`XewBbK{_A`K}fBvAmi@',
  'xBycBeCauBoF}}@qJioAww@gjHaPopA_NurAyJku@uGmi@cDs[eRaiBkQstAsQkcByNma',
  'CsK_uBcJgbEw@gkB_@ypEqDoqSm@eZcDwjBoGw`BoMegBaU_`Ce_@_uBqb@ytBwkFqiT_',
  'fAqfEwe@mfCka@_eC_UmlB}MmaBeWkkDeHwqAoX}~DcBsZmLcxBqOwqE_DkyAuJmrJ\\o',
  '~CfIewG|YibQxBssB?es@qGciA}RorAoVajA_nAodD{[y`AgPqp@mKwr@ms@umEaW{dAm',
  'b@umAw|@ojBwzDaaJsmBwbEgdCsrFqhAihDquAi`Fux@}_Dui@_eB_u@guCuyAuiHukA_',
  'lKszAu|OmaA{wKm}@clHs_A_rEahCssKo\\sgBsSglAqk@yvDcS_wAyTwpBmPc|BwZknF',
  'oFscB_GsaDiZmyMyLgtHgQonHqT{hKaPg}Dqq@m~Hym@c`EuiBudIabB{hF{pWifx@snA',
  'w`GkFyVqf@y~BkoAi}Lel@wtc@}`@oaXi_C}pZsi@eqGsSuqJ|Lqeb@e]kgPcaAu}SkDw',
  'zGhn@gjYh\\qlNZovJieBqja@ed@siO{[ol\\kCmjMe\\isHorCmec@uLebB}EqiBaCg}',
  '@m@qwHrT_vFps@kkI`uAszIrpHuzYxx@e{Crw@kpDhN{wBtQarDy@knFgP_yCu\\wyCwy',
  'A{kHo~@omEoYmoDaEcPiuAosDagD}rO{{AsyEihCayFilLaiUqm@_bAumFo}DgqA_uByi',
  '@swC~AkzDlhA}xEvcBa}Cxk@ql@`rAo|@~bBq{@``Bye@djDww@z_C_cAtn@ye@nfC_eC',
  '|gGahH~s@w}@``Fi~FpnAooC|u@wlEaEedRlYkrPvKerBfYs}Arg@m}AtrCkzElw@gjBb',
  'h@woBhR{gCwGkgCc[wtCuOapAcFoh@uBy[yBgr@c@iq@o@wvEv@sp@`FajBfCaq@fIipA',
  'dy@ewJlUc`ExGuaBdEmbBpBssArAuqBBg}@s@g{AkB{bBif@_bYmC}r@kDgm@sPq_BuJ_',
  's@{X_{AsK_d@eM{d@wVgx@oWcu@??aDmOkNia@wFoSmDyMyCkPiBePwAob@XcQ|@oNdCo',
  'SfFwXhEmOnLi\\lbAulB`X_d@|k@au@bc@oc@bqC}{BhwDgcD`l@ed@??bL{G|a@eTje@',
  'oS~]cLr~Bgh@|b@}Jv}EieAlv@sPluD{z@nzA_]`|KchCtd@sPvb@wSb{@ko@f`RooQ~e',
  '[upZbuIolI|gFafFzu@iq@nMmJ|OeJn^{Qjh@yQhc@uJ~j@iGdd@kAp~BkBxO{@|QsAfY',
  'gEtYiGd]}Jpd@wRhVoNzNeK`j@ce@vgK}cJnSoSzQkVvUm^rSgc@`Uql@xIq\\vIgg@~k',
  'Dyq[nIir@jNoq@xNwc@fYik@tk@su@neB}uBhqEesFjoGeyHtCoD|D}Ed|@ctAbIuOzqB',
  '_}D~NgY`\\um@v[gm@v{Cw`G`w@o{AdjAwzBh{C}`Gpp@ypAxn@}mAfz@{bBbNia@??jI',
  'ab@`CuOlC}YnAcV`@_^m@aeB}@yk@YuTuBg^uCkZiGk\\yGeY}Lu_@oOsZiTe[uWi[sl@',
  'mo@soAauAsrBgzBqgAglAyd@ig@asAcyAklA}qAwHkGi{@s~@goAmsAyDeEirB_{B}IsJ',
  'uEeFymAssAkdAmhAyTcVkFeEoKiH}l@kp@wg@sj@ku@ey@uh@kj@}EsFmG}Jk^_r@_f@m',
  '~@ym@yjA??a@cFd@kBrCgDbAUnAcBhAyAdk@et@??kF}D??OL'
].join('');

var route = /** @type {ol.geom.LineString} */ (new Polyline({
  factor: 1e6
}).readGeometry(polyline, {
  dataProjection: 'EPSG:4326',
  featureProjection: 'EPSG:3857'
}));

var routeCoords = route.getCoordinates();
var routeLength = routeCoords.length;

var routeFeature = new Feature({
  type: 'route',
  geometry: route
});
var geoMarker = new Feature({
  type: 'geoMarker',
  geometry: new Point(routeCoords[0])
});
var startMarker = new Feature({
  type: 'icon',
  geometry: new Point(routeCoords[0])
});
var endMarker = new Feature({
  type: 'icon',
  geometry: new Point(routeCoords[routeLength - 1])
});

var styles = {
  'route': new Style({
    stroke: new Stroke({
      width: 6, color: [237, 212, 0, 0.8]
    })
  }),
  'icon': new Style({
    image: new Icon({
      anchor: [0.5, 1],
      src: 'data/icon.png'
    })
  }),
  'geoMarker': new Style({
    image: new CircleStyle({
      radius: 7,
      snapToPixel: false,
      fill: new Fill({color: 'black'}),
      stroke: new Stroke({
        color: 'white', width: 2
      })
    })
  })
};

var animating = false;
var speed, now;
var speedInput = document.getElementById('speed');
var startButton = document.getElementById('start-animation');

var vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: [routeFeature, geoMarker, startMarker, endMarker]
  }),
  style: function(feature) {
    // hide geoMarker if animation is active
    if (animating && feature.get('type') === 'geoMarker') {
      return null;
    }
    return styles[feature.get('type')];
  }
});

var center = [-5639523.95, -3501274.52];
var map = new Map({
  target: document.getElementById('map'),
  loadTilesWhileAnimating: true,
  view: new View({
    center: center,
    zoom: 10,
    minZoom: 2,
    maxZoom: 19
  }),
  layers: [
    new TileLayer({
      source: new BingMaps({
        imagerySet: 'AerialWithLabels',
        key: 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5'
      })
    }),
    vectorLayer
  ]
});

var moveFeature = function(event) {
  var vectorContext = event.vectorContext;
  var frameState = event.frameState;

  if (animating) {
    var elapsedTime = frameState.time - now;
    // here the trick to increase speed is to jump some indexes
    // on lineString coordinates
    var index = Math.round(speed * elapsedTime / 1000);

    if (index >= routeLength) {
      stopAnimation(true);
      return;
    }

    var currentPoint = new Point(routeCoords[index]);
    var feature = new Feature(currentPoint);
    vectorContext.drawFeature(feature, styles.geoMarker);
  }
  // tell OpenLayers to continue the postcompose animation
  map.render();
};

function startAnimation() {
  if (animating) {
    stopAnimation(false);
  } else {
    animating = true;
    now = new Date().getTime();
    speed = speedInput.value;
    startButton.textContent = 'Cancel Animation';
    // hide geoMarker
    geoMarker.setStyle(null);
    // just in case you pan somewhere else
    map.getView().setCenter(center);
    map.on('postcompose', moveFeature);
    map.render();
  }
}


/**
 * @param {boolean} ended end of animation.
 */
function stopAnimation(ended) {
  animating = false;
  startButton.textContent = 'Start Animation';

  // if animation cancelled set the marker at the beginning
  var coord = ended ? routeCoords[routeLength - 1] : routeCoords[0];
  /** @type {ol.geom.Point} */ (geoMarker.getGeometry())
      .setCoordinates(coord);
  //remove listener
  map.un('postcompose', moveFeature);
}

startButton.addEventListener('click', startAnimation, false);
