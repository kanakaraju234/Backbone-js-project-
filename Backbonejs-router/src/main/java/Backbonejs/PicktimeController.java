package Backbonejs;

import java.io.PrintStream;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PicktimeController {

	
	@RequestMapping(value="/")
	public String index()
	{	
		return "index";
	}
	
	@RequestMapping(value="/hello", method=RequestMethod.GET)
	public String SignUp()
			
	{	
		
		
	
		
		return "Signup";
	}
	
	@RequestMapping(value="/id")
	public String Login()
	{	
		
		return "Login";
	}
	
	@RequestMapping(value="/di")
	public String IdDetails()
			
	{	
		
		return " ";
	}
	
	
}
