import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { VendorDetails } from '../models/vendors.model';

@Injectable()
export class VendorServiceService {
  private headers = new Headers({'Content-Type': 'application/json'});
  //private vendorUrl = 'http://arconsegypt.com/vendors/vendorapi.php';
  private vendorUrl = 'http://localhost/arcons-vendors3/vendorapi.php';
  Vendor: VendorDetails;


  constructor(private _http:Http) { }

  searchVendor(str:string){
        if (!str) str='null';
        return this._http.get(this.vendorUrl+'?q='+str+'&key=AIzaSyBuHU93GB-eAyPKcja1ArdXBuhu_7eahhQ')
        .map(res => res.json());
  }
/*
  addVendor(vendor: VendorDetails){
        return this._http.post(this.vendorUrl, JSON.stringify(vendor),this.headers)
        .map(res => res.json());
  }

  getVendor(id: number): Promise<VendorDetails> {
    return this._http.get(this.vendorUrl+'?id='+id+'&key=AIzaSyBuHU93GB-eAyPKcja1ArdXBuhu_7eahhQ')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
*/
}
