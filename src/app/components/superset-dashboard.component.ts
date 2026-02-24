import { Component, signal, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { embedDashboard } from '@superset-ui/embedded-sdk';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-superset-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './superset-dashboard.component.html',
  styleUrl: './superset-dashboard.component.css'
})
export class SupersetDashboard {
    async ngAfterViewInit() {

        const token = await fetch('http://localhost:5124/api/superset/guest-token')
        .then(res => res.json())
        .then(data => data.token);

        embedDashboard({
            id: '533b8b78-95be-4a5e-8e56-c53ad863e3d4',
            supersetDomain: 'http://192.168.127.113:8088',
            mountPoint: document.getElementById('superset-container')!,
            fetchGuestToken: async () => token,

            dashboardUiConfig: {
                hideTitle: true,
                hideChartControls: true,
                hideTab: true,
            }
        });
        
        const id = await this.getEmbeddedId();
        console.log("id in frontend", id);
    }

    async getEmbeddedId(){
        console.log("---------------inside get embedded id api call from frontend")
        const ans = await fetch('http://localhost:5124/api/superset/embedded-id')
        .then(res => res.json())
        .then(data => data.token);
        return ans;
    }
}