package vn.edu.hust.soict.CNPM_HUST_20231.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String msg){
        super(msg);
    }
}
