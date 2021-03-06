import { Component, OnInit, ViewChild } from "@angular/core";
import { Simulator } from "src/app/shared/simulator";

import { ChartDataSets, ChartType, ChartOptions } from "chart.js";
import { Label, BaseChartDirective } from "ng2-charts";
@Component({
  selector: "app-simulator",
  templateUrl: "./simulator.component.html",
  styleUrls: ["./simulator.component.scss"],
})
export class SimulatorComponent implements OnInit {
  simulator: Simulator;
  showGraph = false;
  @ViewChild(BaseChartDirective)
  chart: BaseChartDirective;

  colors = [{ backgroundColor: "#6a1b9a" }];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };
  public barChartLabels: Label[]; //this.simulator.labels;
  public barChartType: ChartType = "bar";
  public barChartLegend = false;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [{ data: [], label: "Series A" }];

  speed = 1;

  selectA: number;
  selectB: number;

  constructor() {
    this.simulator = new Simulator();
    this.barChartData[0].data = this.simulator.data;
  }
  restart() {
    for (let i = this.simulator.data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.simulator.data[i], this.simulator.data[j]] = [
        this.simulator.data[j],
        this.simulator.data[i],
      ];
    }
    if (this.showGraph) {
      this.chart.update();
    }
  }
  start() {
    //$("#d2").parent().append("<i class='material-icons'>home</i> ");
    //$("#d2").toggleClass("mat-elevation-z4");
    //$("#d10").toggleClass("selected");
    this.shellSort();
    //this.barChartLabels.length = 0;
    //this.barChartLabels.push(this.simulator.labels);
  }
  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
    ];
    this.barChartData[0].data = data;
  }
  async shellSort() {
    const array = this.simulator.data;
    const gaps = this.simulator.hList;
    for (var g = 0; g < gaps.length; g++) {
      const gap = gaps[g];

      for (var i = gap; i < array.length; i++) {
        const temp = array[i];
        const prev = i - gap;
        const aux = array[prev];

        this.selectA = prev;
        if (gap > 1) {
          this.selectB = i;
        } else {
          this.selectB = null;
        }
        // $(`#d${prev}`).addClass("selected");
        //$(`#d${i}`).addClass("selected");
        console.log(aux, "-", temp);
        await this.delay(this.speed * 1000);

        for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
          array[j] = array[j - gap];
        }
        array[j] = temp;
        //this.barChartData[0].data;
        if (this.showGraph) {
          this.chart.update();
        }
      }
    }
    this.selectA = undefined;
    this.selectB = undefined;
    return array;
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  ngOnInit(): void {}
}
