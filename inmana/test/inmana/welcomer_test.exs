defmodule Inmana.WelcomerTest do
  @moduledoc """
  Simple logic test
  """
  use ExUnit.Case
  alias Inmana.Welcomer

  describe "welcome/1" do
    test "when user is special, returns a special message" do
      params = %{"name" => "banana", "age" => "42"}
      expected_result = {:ok, "You're very special"}
      result = Welcomer.welcome(params)

      assert result == expected_result
    end

    test "when user is under age, returns an error" do
      params = %{"name" => "Elves", "age" => "35"}
      expected_result = {:ok, "Welcome, elves!"}
      result = Welcomer.welcome(params)

      assert result == expected_result
    end

    test "when user is not special, returns a message" do
      params = %{"name" => "Elves", "age" => "17"}
      expected_result = {:error, "Thou shalt not pass, elves!"}
      result = Welcomer.welcome(params)

      assert result == expected_result
    end
  end
end
