package com.davidlekei.lolmatchtrackerapi.storage;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import org.springframework.stereotype.Component;

@Component("localStorage")
public class LocalStorage implements Storage {
	@Override
	public DataObject get(int id) {
		return null;
	}

	@Override
	public void save(DataObject obj) {

	}
}
