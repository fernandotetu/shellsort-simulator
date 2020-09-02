import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SimulatorComponent } from "./components/simulator/simulator.component";

const routes: Routes = [
  { path: "simulator", component: SimulatorComponent },
  {
    path: "",
    redirectTo: "simulator",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
