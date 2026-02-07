import Time "mo:core/Time";
import Text "mo:core/Text";
import List "mo:core/List";
import Iter "mo:core/Iter";

actor {
  let leads = List.empty<Lead>();

  type Lead = {
    timestamp : Time.Time;
    intent : Text;
    name : Text;
    email : Text;
    company : Text;
    message : Text;
  };

  public shared ({ caller }) func submitLead(intent : Text, name : Text, email : Text, company : Text, message : Text) : async Bool {
    let newLead : Lead = {
      timestamp = Time.now();
      intent;
      name;
      email;
      company;
      message;
    };
    leads.add(newLead);
    true;
  };

  public query ({ caller }) func getAllLeads() : async [Lead] {
    leads.values().toArray();
  };
};
