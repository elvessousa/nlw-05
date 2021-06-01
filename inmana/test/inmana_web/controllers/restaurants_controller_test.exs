defmodule InmanaWeb.RestaurantsControllerTest do 
  use InmanaWeb.ConnCase, async: true

  describe "create/2" do
    test "when all params are valid, creates the user",  %{conn: conn} do
      params = %{name: "Restaurant Teum", email: "teum@restaurant.com"}

      response = 
        conn
        |> post(Routes.restaurants_path(conn, :create, params))
        |> json_response(:created)

      assert %{
        "message" => "Restaurant created.",
        "restaurant" => %{
          "email" => "teum@restaurant.com", 
          "id" => _id, 
          "name" => "Restaurant Teum"
        }
      } = response
    end

    test "when params are invalid, returns an error",  %{conn: conn} do
      params = %{email: "teum@restaurant.com"}
      expected_response = %{"message" => %{"name" => ["can't be blank"]}}

      response = 
        conn
        |> post(Routes.restaurants_path(conn, :create, params))
        |> json_response(:bad_request)

      assert response == expected_response
    end
  end
end
