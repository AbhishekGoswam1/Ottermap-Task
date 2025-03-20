import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Draw, Modify, Snap } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style } from "ol/style";

function Maps() {
  const mapRef = useRef(null);

  useEffect(() => {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        stroke: new Stroke({ color: "blue", width: 2 }),
        fill: new Fill({ color: "rgba(0, 0, 255, 0.1)" }),
      }),
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer,
      ],
      view: new View({ center: [0, 0], zoom: 2 }),
    });

    const draw = new Draw({ source: vectorSource, type: "Polygon" });
    const modify = new Modify({ source: vectorSource });
    const snap = new Snap({ source: vectorSource });

    map.addInteraction(draw);
    map.addInteraction(modify);
    map.addInteraction(snap);

    return () => map.setTarget(null);
  }, []);

  return <div ref={mapRef} className="w-screen h-[500px] border rounded-lg shadow" />
}

export default Maps;
