import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

import { VendorServiceService } from '../../services/vendor.service';
import { VendorDetails } from '../../models/vendors.model'

@Component({
  templateUrl: 'vendor.html',
})
export class NavigationDetailsPage {
  vendor;

  constructor(params: NavParams) {
    this.vendor = params.data.vendor;
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  search:string;
  vendors: [''];
  selectedVendor: VendorDetails;
  constructor(
    public nav: NavController,
    public loadingCtrl: LoadingController,
    private _searchservice: VendorServiceService
  ) {

  }

  ngOnInit() {}

  searchVendor() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present().then(() => {
      this._searchservice.searchVendor(this.search)
          .subscribe(res => {
              console.log(res);
              this.vendors = res;
          });
      loading.dismiss();
    });
  }

  openNavDetailsPage(vendor) {
    this.nav.push(NavigationDetailsPage, { vendor: vendor });
  }

}
