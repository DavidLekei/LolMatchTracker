package com.davidlekei.lolmatchtrackerapi.storage;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;

public interface Storage {

	public DataObject get(int id);

	public void save(DataObject obj);

}
