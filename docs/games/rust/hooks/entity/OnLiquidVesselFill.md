---
hide_table_of_contents: true
---

# OnLiquidVesselFill

## Usage

* Called when a player is attempting to fill a liquid vessel
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnLiquidVesselFill(BaseLiquidVessel liquidVessel, BasePlayer player, LiquidContainer facingLiquidContainer)
{
    Puts("OnLiquidVesselFill works!");
    return null;
}
```
