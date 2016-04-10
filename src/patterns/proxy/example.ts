import { GeoCoder, GeoCoderProxy } from './implementation';

const proxyCoder = new GeoCoderProxy(GeoCoder);

proxyCoder.getCoords('Amsterdam');
proxyCoder.getCoords('Berlin');
proxyCoder.getCoords('Berlin');
proxyCoder.getCoords('Berlin');
proxyCoder.getCoords('Paris');
proxyCoder.getCoords('Paris');

proxyCoder.getCacheSize();

// смотри в консоль
