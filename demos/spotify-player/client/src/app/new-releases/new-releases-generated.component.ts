/*
  This file is automatically generated. Any changes will be overwritten.
  Modify new-releases.component.ts instead.
*/
import { Injector, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { SpotifyService } from '../spotify.service';

/*
  Component properties set from design-time.
*/
const { components } = require('../../../../meta/pages/new-releases.json');

export class NewReleasesGenerated implements OnInit, OnDestroy {
  components = components;
  // Array of messages displayed by the notification component.
  messages = [];

  router: Router;

  route: ActivatedRoute;

  _location: Location;

  subscription: Subscription;


  spotify: SpotifyService;

  releases: any;

  parameters: any;

  ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this instanceof <any>this.route.component) {
        this.parameters = this.route.snapshot.params;

        this.load();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  load() {
    this.spotify.getNewReleases()
    .then(result => {
      this.releases = result.albums.items;
    }, result => {

    });
  }

  grid0Select(event: any) {
    this.router.navigate([{ outlets: { popup: null } }]).then(() => this.router.navigate(['tracks', event.id]));
  }

  constructor(injector: Injector) {
    this.router = injector.get(Router);

    this._location = injector.get(Location);

    this.route = injector.get(ActivatedRoute);

    this.spotify = injector.get(SpotifyService);
  }
}
