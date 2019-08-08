import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { environment } from '../../environments/environment';
import { StorageService } from '../shared';

@Component({
  selector: "evo-auth",
  template: "",
})
export class AuthComponent implements OnInit {
  constructor(    
    private route: ActivatedRoute,
    private storageService: StorageService,
    private router: Router 
  ) {}

  ngOnInit() { 
    
    this.route.paramMap.subscribe(params => {
      const token: string = params.get('token');  
      this.storageService.setItem(environment.token_key, token);
      this.router.navigate(['/dashboard']); 
    });
  }

  // No need to usubscribe from ActivatedRoute on Destroy
  
}
