import { Component, OnInit } from '@angular/core';
// import { embedChart } from '@superset-ui/embedded-sdk';

@Component({
  selector: 'app-superset-chart',
  template: `<iframe
  src="http://192.168.127.113:8088/superset/explore/?form_data_key=uP7Rn8ECO8s&slice_id=7"
  width="100%"
  height="600"
  frameborder="0"
></iframe>`
})
export class SupersetChartComponent implements OnInit {
  async ngOnInit() {
    // Fetch guest token from backend
    const token = await fetch('http://localhost:5124/api/superset/guest-token')
      .then(res => res.json())
      .then(data => data.token);

    // Embed the chart
    // embedChart({
    //   id: 7, // Chart ID
    //   supersetDomain: 'http://192.168.127.113:8088', // Superset host
    //   mountPoint: document.getElementById('superset-container')!,
    //   fetchGuestToken: async () => token
    // });
  }
}