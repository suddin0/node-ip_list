#!/usr/bin/env python3

import sys
import random

# File Configation
name_file		= "name_list"
country_file	= "country_list"
flag_file		= "flag_list"
flag_path		= "./images/flags/"

# Object confog
OBJ_NAME	= "name"
OBJ_IP		= "ip"
OBJ_LOCATION= "location"
OBJ_FLAG	= "flag"
OBJ_STATUS	= "status"
OBJ_TIME	= "time"

# Status config
status = ["Red Angel", "White Gorilla", "Dead Fisherman"]


def read_file(name):
	file = open(name, "r")
	data = file.read()
	return (data.split("\n"))

def print_object(i, x, name, ip, location, flag, status, time):
	print("{")	# Object start
	print("\t", OBJ_NAME,		"\t\t: \""	+ name	+ "\",") # User name
	print("\t", OBJ_IP,		 	"\t\t: \""	+ ip		+ "\",") # Ip address
	print("\t", OBJ_LOCATION,	"\t: \""	+ location	+ "\",") # Location
	print("\t", OBJ_FLAG,	 	"\t\t: require(\""  + flag_path + flag + "\"),")# Flag
	print("\t", OBJ_STATUS,	 	"\t: \""	+ status	+ "\",")	# Status
	print("\t", OBJ_TIME,	 	"\t\t: \""	+ time			+ "\",")	# Time
	if(i + 1 < x):
		print("},")	# Object end
	else:
		print("}", end="")	# Object end

def zero_ip(ip):
	if(len(ip) == 2):
		return("0" + ip)
	if(len(ip) == 1):
		return( "00" + ip)
	if(len(ip) == 3):
		return(ip)

def ip_gen():
	a = zero_ip(str(random.randint(1, 255)))
	b = zero_ip(str(random.randint(1, 255)))
	c = zero_ip(str(random.randint(1, 255)))
	d = zero_ip(str(random.randint(1, 255)))
	return(a + "." + b + "." + c + "." + d);

def main():
	if(len(sys.argv) <= 1):
		print("[-] No argument passed.\n")
		print("IpListGenerate is a ip information generator.")
		print("usage: ", sys.argv[0], " <number of element to generate>")
		sys.exit()

	name = read_file(name_file)
	country = read_file(country_file)
	flag = read_file(flag_file)

	i = 0;
	x = int(sys.argv[1]);

	# Open array
	if(x > 0):
		print("export const data = [", end="")

	while(i < x):
		rand_name	= random.randint(0, len(name) - 1)
		rand_ip		= ip_gen()
		rand_flag	= random.randint(0, len(flag) - 1)
		rand_status	= random.randint(0, len(status) - 1)

		rand_hours	= str(random.randint(0, 23))
		rand_min	= str(random.randint(0, 60))
		rand_time = ("0" + rand_hours  if len(rand_hours) == 1  else rand_hours)  + ":" +  (("0" + rand_min) if (len(rand_min) == 1) else rand_min)

		print_object(i, x, name[rand_name], rand_ip, country[rand_flag],  flag[rand_flag], status[rand_status], rand_time)

		i += 1;

	# Close arraay
	if(x > 0):
		print("]")


if __name__ == "__main__":
	main()
