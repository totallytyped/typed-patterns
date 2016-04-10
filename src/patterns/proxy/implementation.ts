export type Cities = 'Amsterdam' | 'London' | 'Paris' | 'Berlin';

interface GeoCoderInterface {
    getCoords: (city: Cities) => string;
}

export class GeoCoder implements GeoCoderInterface {
    getCoords(city: Cities) {
        if (city === 'Amsterdam') {
            return '52.3700° N, 4.8900° E';
        } else if (city === 'London') {
            return '51.5171° N, 0.1062° W';
        } else if (city === 'Paris') {
            return '48.8742° N, 2.3470° E';
        } else if (city === 'Berlin') {
            return '52.5233° N, 13.4127° E';
        } else {
            return '';
        }
    }
}

export class GeoCoderProxy {
    private proxiedGeoCoder: GeoCoderInterface;
    private cache = {};

    constructor(GeoCoder) {
        this.proxiedGeoCoder = new GeoCoder();
    }

    public getCoords(city: Cities) {
        const isCached = this.cache[city];
        if (!isCached) {
            this.cache[city] = this.proxiedGeoCoder.getCoords(city);
        }
        console.log(`Coords for ${city}: ${this.cache[city]}${isCached ? ' (from cache)' : ''}`);
        return this.cache[city];
    }

    public getCacheSize() {
        console.log(`Cache size: ${Object.keys(this.cache).length}`);
        return Object.keys(this.cache).length;
    }
}
