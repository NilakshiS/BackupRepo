package com.stackroute.manufacture.services;

import com.stackroute.manufacture.domain.BasePrice;
import com.stackroute.manufacture.repository.BasepriceRepository;
import com.stackroute.manufacture.services.BasepriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BasepriceServiceImpl implements BasepriceService
{

    BasepriceRepository basepriceRepository;

        @Autowired
        public BasepriceServiceImpl(BasepriceRepository basepriceRepository)
        {
            this.basepriceRepository = basepriceRepository;
        }

        @Override
        public BasePrice saveBaseprice(BasePrice baseprice) {
            BasePrice savedBaseprice = basepriceRepository.save(baseprice);
            return savedBaseprice;
        }

    @Override
    public List<BasePrice> getAllBaseprice() {
        return basepriceRepository.findAll();
    }


        @Override
        public boolean deleteBaseprice(String id ){
            // Optional<User> user1 = userRepository.findById(id);

            try {
                basepriceRepository.deleteById(id);
                return true;
            }
            catch (Exception exception)
            {
                return false;
            }
        }
        @Override
        public BasePrice updateBaseprice(BasePrice baseprice, String id)
        {
            Optional<BasePrice> user1 = basepriceRepository.findById(id);

            baseprice.setId(id);
            baseprice.setName(baseprice.getName());
            baseprice.setPrice(baseprice.getPrice());


            BasePrice savedBaseprice = basepriceRepository.save(baseprice);
            return savedBaseprice;
        }

    }


