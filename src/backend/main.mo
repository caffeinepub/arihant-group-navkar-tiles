import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Order "mo:core/Order";

actor {
  type Submission = {
    name : Text;
    phone : Text;
    requirement : Requirement;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compareByTimestamp(sub1 : Submission, sub2 : Submission) : Order.Order {
      Int.compare(sub1.timestamp, sub2.timestamp);
    };
  };

  type Requirement = {
    #tiles;
    #kitchen;
    #interior;
    #other;
  };

  let submissions = Map.empty<Text, Submission>();

  public shared ({ caller }) func submitForm(name : Text, phone : Text, requirement : Requirement, message : Text) : async () {
    let id = name.concat(Time.now().toText());
    let submission : Submission = {
      name;
      phone;
      requirement;
      message;
      timestamp = Time.now();
    };
    submissions.add(id, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort(Submission.compareByTimestamp);
  };
};
