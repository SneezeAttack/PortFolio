import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  formData: FormData = new FormData();


  song: Boolean = false;
  plugin: Boolean = false;

  tmp: String = "";

  constructor(private sendService: HttpService) {


  }

  ngOnInit(): void {
  }


  //This is in dire need of something more maintainable
  setState(i: Number) {
    if (i == 1) {
      this.song = true;
      this.plugin = false;
    } else if (i == 2) {
      this.song = false;
      this.plugin = true;
    }
  }

  setFile(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.formData.set("File", file, "filename.txt");
    }
  }

  sendData(data: any) {

    console.log(data);
    this.sendService.sendData(data).subscribe((result) => console.warn(result));



    //this.sendService.sendTest().subscribe((result) => console.warn(result));
  }

}
