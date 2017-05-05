package org.sbs.controller;

import java.util.Date;

import org.sbs.dto.OutputMessage;
import org.springframework.messaging.handler.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import org.sbs.dto.*;

@Controller
@RequestMapping("/")
public class BlogController {
	@RequestMapping(method = RequestMethod.GET)
	public String viewApplication() {
		return "index";
	}

	@MessageMapping("/chat")
	@SendTo("/topic/message")
	public OutputMessage sendMessage(Message message) {
		
		// logger.info("Message sent");
		//System.out.println("Message Sent" + message.getMessage());

		return new OutputMessage(message, new Date());
	}

}
