import { HomeComponent } from "./components/iameveami/home/home.component";

import { Routes, RouterModule, CanActivate } from "@angular/router";
import { DesignOneComponent } from "./components/design-one/design-one.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/iameveami",
    pathMatch: "full"
  },
  { path: "sphere", component: DesignOneComponent },
  { path: "iameveami", component: HomeComponent },
  { path: "**", component: DesignOneComponent }
];

// DB_DATABASE=pome
// DB_USERNAME=pome
// DB_PASSWORD=pome
