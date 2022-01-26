---
hide_table_of_contents: true
---

# OnHelicopterDropCrate

## Usage

* Called when a CH47 helicopter is dropping a crate
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHelicopterDropCrate(CH47HelicopterAIController heli)
{
    Puts("OnHelicopterDropCrate works!");
    return null;
}
```
