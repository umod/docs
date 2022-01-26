---
hide_table_of_contents: true
---

# OnCargoPlaneSignaled

## Usage

* Called right after a supply signal has called a cargo plane
* No Return behavior

## Examples

```csharp title=""
void OnCargoPlaneSignaled(CargoPlane cargoPlane, SupplySignal supplySignal)
{
    Puts("OnCargoPlaneSignaled works!");
}
```
