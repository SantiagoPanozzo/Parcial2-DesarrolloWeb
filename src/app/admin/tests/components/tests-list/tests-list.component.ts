import { Component, OnInit } from '@angular/core';
import { ITest } from '../../interfaces/ITest';
import { TestService } from '../../services/test.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {
  public tests: ITest[] = [] as ITest[];

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.fetchTests();
  }

  ngOnLoad(): void {
    this.fetchTests();
  }

  fetchTests() {
    this.testService.getTests().subscribe((tests) => {
      this.tests = tests;
    });
  }

  deleteTest(id: number): void {
    this.testService.deleteTest(id);
  }
}
