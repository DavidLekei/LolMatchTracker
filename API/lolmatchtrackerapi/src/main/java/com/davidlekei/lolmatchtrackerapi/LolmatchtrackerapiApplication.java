package com.davidlekei.lolmatchtrackerapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Local imports


@SpringBootApplication
public class LolmatchtrackerapiApplication {

	public static void main(String[] args)
	{
		DataLoader loader = new DataLoader();
		loader.loadAll();

		SpringApplication.run(LolmatchtrackerapiApplication.class, args);
	}

}
