---
hide_table_of_contents: true
---

# OnBoatPathGenerate

## Usage

* Called before the ocean patrol path for a BaseBoat or CargoShip is generated
* Return a new `List<Vector3>` to change boat path

## Examples

```csharp title="Change boat path"
List<Vector3> OnBoatPathGenerate(BaseBoat boat)
{
    return new List<Vector3>() { new Vector3(1f, 2f, 3f) };
}
```
