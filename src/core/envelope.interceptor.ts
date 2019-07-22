import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

export interface Response<T> {
	data: T;
}

@Injectable()
export class EnvelopeInterceptor<T> implements NestInterceptor<T, Response<T>> {
	intercept(
		context: ExecutionContext,
		call$: Observable<T>
	): Observable<Response<T>> {
		return call$.pipe(
			map(data => ({ message: 'Success', data: data }))
		);
	}
}
