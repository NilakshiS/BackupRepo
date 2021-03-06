package com.stackroute.onlinefashionretail.consumer.exception.Product;

public class ProductAlreadyExistsException extends Exception {
    public ProductAlreadyExistsException() {
        super();
    }

    public ProductAlreadyExistsException(String message) {
        super(message);
    }

    public ProductAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }
}
