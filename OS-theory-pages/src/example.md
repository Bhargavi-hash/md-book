# Chapter 1


[itap]
This is for an image.
[img] sch_policy.png=sch_policy
--prompt--
Ok

[itap]
The mode shift between user and kernel is done by the hardware
--prompt--
Ok. Understood.

[itap]
The mode shift happens when there is an interrupt or syscall
--prompt--
Understood

[itap]
The Hardware is responsible to load the information in user-stack to k-stack, then shift to the kernel mode, and then go to the interrupt handler. If it is a timer interrupt, then kernel will run the Timer Handler routine. Once the interrupt is dealt with, the kernel will move onto perform the context switching. 
--prompt--
I have read and understood the above paragragh

[itap]
Now the kernel will first save the regsiters of the user process A which was interrupted into its PCB i.e. PCB-A. The data stored in PCB is obtained from the k-stack of Process A which was copied by the hardware from the user stack.
--prompt--
Cool. Got it

[itap]
Once storing into PCB is done, its now time to restore the register info from the PCB of a new process selected by the scheduler. The register info is saved into the k-stack of the new process, let's name it B. Now the hardware plays it's role again and populates the user stack of process B with the info stored in k-stack of process B. Once this is done, it changes the mode from user to kernel. 
--prompt--
I have read and understood the above paragraph.


[itap]
Now the CPU in user mode executes process B. This process might be context switched with some other process if an interrupt arrives. 
--prompt--
Yes. Got it

[itap]
Testing for single correct options
--prompt--
[sc] Test1
[sc] Test2
[sc] Test3

[itap]
Testing for multiple correct options
--prompt--
[mc] MTest1
[mc] MTest2
[mc] MTest3