package com.bec.becenquiry.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bec.becenquiry.Entity.Booking;

@Repository
public interface Bookingrepository extends JpaRepository<Booking,Integer> {

}
