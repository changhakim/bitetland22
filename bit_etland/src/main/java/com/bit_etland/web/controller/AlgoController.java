package com.bit_etland.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bit_etland.web.service.SequenceService;

@Controller
@RequestMapping("/algo")
public class AlgoController {
	static final Logger logger = LoggerFactory.getLogger(AlgoController.class);
	@Autowired SequenceService sequenceService;
	@Autowired Map<String, Object> map;
	@RequestMapping(value="/seq/{kind}",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> sequence(@PathVariable String kind,
			@RequestBody Map<String, Object> param) {
		logger.info("\n --------- AlgoController {} !! ----------","sequence");
		System.out.println("넘어온 문제종류"+kind);
		map = new HashMap<String,Object>();
		String start = (String) param.get("start");
		System.out.println("컨트롤러 스타트"+start);
		String end=(String) param.get("end");
		String diff = (String) param.get("diff");
		map.put("start", start);
		map.put("end", end);
		map.put("diff", diff);
		String result = "";
		switch(kind) {
		case "ari":
			result = sequenceService.arithmeticSequence(map);
			break;
		case "geo":
			result = sequenceService.geometricSequence(map);
			break;
		case "fac":
			result = sequenceService.factorialSequence(map);
			break;
		case "fibo":
			result = sequenceService.fibonacciSequence(map);
			break;	
		}
		map.put("result",result);
		return map;
	}
}
