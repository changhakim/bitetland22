package com.bit_etland.web.service;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class SequenceServiceImpl implements SequenceService {
	
	
	/*
	 * Section 02 등차 수열 
	 * 2 8 14 20 ... 200항까지 합
	 */
	@Override
	public String arithmeticSequence(Map<?, ?> param) {
		System.out.println("들어옴");
		String start = (String) param.get("start"), end = (String) param.get("end"), diff = (String) param.get("diff"),
		result = "";
		System.out.println(start+"==="+end);
		int A = Integer.parseInt(start); // 첫번째
		int E = Integer.parseInt(end); // 마지막번째
		int D = Integer.parseInt(diff); // 공차
		int S = A;
		int N = 2; // 항의 순서
		int AN = 0;
		while (true) {
			AN = A + (N - 1) * D;
			S = S + AN;
			N = N + 1;
			if (N > E)
				break;
		}
		result = String.valueOf(S);
		return result;
	}

	/*
	 * Section 03 등비 수열 
	 * 2 6 18 54 ... 10항까지 59,048 공비 R
	 */
	@Override
	public String geometricSequence(Map<?, ?> param) {
		String start = (String) param.get("start"), end = (String) param.get("end"), diff = (String) param.get("diff");
		int A = Integer.parseInt(start);
		int R = Integer.parseInt(end);
		int S = A;
		int N = Integer.parseInt(diff);

		while (true) {

			A = A * R;
			S += A;
			N++;
			System.out.println("Count is " + (N - 1) + ", Number is " + A + ", Sum is " + S);
			if (N > 100) {
				break;
			}

		}
		System.out.println("S is " + S);
		return S+"";
	}
	
	/*
	 * Section 04 피보나치 수열  
	 * */
	@Override
	public String fibonacciSequence(Map<?, ?> param) {
		String start = (String) param.get("start"), end = (String) param.get("end"), diff = (String) param.get("diff");
		int A =  Integer.parseInt(start);
        int B = Integer.parseInt(end);
        int S = A+B;
        int N = Integer.parseInt(diff);
        int C = 0;
    
        while(true){
            
            C = A + B;
            S += C;
            A = B;
            B = C;
            N++;
            System.out.println(
                    "Count is "+(N)+", Number is "+ C +", Sum is "+ S);
            if(N==20){
                break;
            }
            
        }
        System.out.println("S is "+ S);     
		return S+"";
	}
	/*
	 * Section 05 누승 활용 수열
	 * 팩토리얼 10항까지의 합: 4,037,913 
	 * */
	@Override
	public String factorialSequence(Map<?, ?> param) {
		String start = (String) param.get("start"), end = (String) param.get("end"), diff = (String) param.get("diff");
		int S = Integer.parseInt(start);
        int F = Integer.parseInt(end);
        int N = Integer.parseInt(diff);
        for (N = 2; N < 11; N++) {
            F = F * N;
            S += F;
            System.out.println("Count is " + (N)
                    + ", Number is " + F
                    + ", Sum is " + S);
        }
		return S+"";
	}
	

	/*
	 * Section 07 ‘+,-‘ 교행 자연수 수열 
	 * -1+2-3+4-5+6-7+8-9+10-11+12-13+14-15+16-17+18-19 = -10
	 */
	@Override
	public String switchSequence(Map<?, ?> param) {
		String start = (String) param.get("start"), end = (String) param.get("end");
		int S = Integer.parseInt(start);
		int N = Integer.parseInt(end);
		String ex = "";
		do {
			N++;
			System.out.println("N is " + N);
			S += N;
			System.out.println("합계: " + S);
			ex += "+" + N;
			N++;
			System.out.println("N is " + N);
			S -= N;
			System.out.println("합계: " + S);
			ex += "-" + N;
		} while (N < 19);
		System.out.println(ex + " = " + S);
		
		return S+"";
	}
	
	

}