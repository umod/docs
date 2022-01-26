---
hide_table_of_contents: true
---

# OnLiquidVesselFill

## Usage

* Called when a player is attempting to fill a liquid vessel
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnLiquidVesselFill(BaseLiquidVessel liquidVessel, BasePlayer player, LiquidContainer facingLiquidContainer)
{
    Puts("OnLiquidVesselFill works!");
    return null;
}
```
