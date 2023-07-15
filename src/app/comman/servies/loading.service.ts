import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubjects: { [key: string]: BehaviorSubject<boolean> } = {};

  showLoader(section: string): void {
    if (!this.loadingSubjects[section]) {
      this.loadingSubjects[section] = new BehaviorSubject<boolean>(true);
    } else {
      this.loadingSubjects[section].next(true);
    }
  }

  hideLoader(section: string): void {
    if (this.loadingSubjects[section]) {
      this.loadingSubjects[section].next(false);
    }
  }

  getLoaderState(section: string) {
    if (!this.loadingSubjects[section]) {
      this.loadingSubjects[section] = new BehaviorSubject<boolean>(false);
    }
    return this.loadingSubjects[section].asObservable();
  }
}
